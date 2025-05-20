"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

// Restaurant-specific context to help the model provide better responses
const RESTAURANT_CONTEXT = `
You are a helpful assistant for Maison Pho, a luxury Vietnamese restaurant.

About Maison Pho:
- Luxury Vietnamese restaurant specializing in premium Pho dishes
- Founded by Chef Minh Nguyen, who trained at Le Cordon Bleu in Paris
- Located at 123 Elegance Avenue, Luxury District, New York, NY 10001
- Phone: (212) 555-8765

Hours:
- Monday - Thursday: 11:30 AM - 10:00 PM
- Friday - Saturday: 11:30 AM - 11:00 PM
- Sunday: 12:00 PM - 9:00 PM

Signature dishes:
- Pho Royal ($24): Premium beef bone broth, wagyu beef slices, bone marrow, truffle oil
- Pho Seafood Deluxe ($28): Seafood broth, lobster tail, jumbo shrimp, scallops
- Pho Vegetable Garden ($22): Aromatic vegetable broth, seasonal organic vegetables, tofu

Reservations:
- Recommended for dinner service
- Can be made online or by phone
- For parties of 8 or more, please call directly

When answering questions:
- Be polite, professional, and helpful
- Provide specific information about the restaurant when relevant
- For reservation requests, encourage users to use the reservation form on the website or call
- For menu questions, mention specific dishes and their descriptions
- If you don't know something, suggest contacting the restaurant directly
- If people ask about anything else outside the restaurant, fell free to answer
`

export async function generateChatResponse(messages: { role: "user" | "model"; content: string }[]) {
  try {
    // Access the environment variable directly each time to ensure we get the latest value
    const apiKey = process.env.GEMINI_API_KEY

    // Validate API key
    if (!apiKey || apiKey.trim() === "" || apiKey === "your-api-key-here") {
      console.error("Gemini API key is not configured or invalid")
      return {
        success: false,
        error: "API_KEY_MISSING",
        response:
          "I'm unable to respond right now. The chatbot has not been properly configured. Please make sure a valid Gemini API key is set in the environment variables.",
      }
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey)

    // Use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    // Get the last user message (which should be the current question)
    const lastUserMessage = messages[messages.length - 1]

    // IMPORTANT: For ALL requests, we'll use generateContent instead of the chat API
    // This avoids the chat history format issues completely

    // If this is the first user message (only 2 messages: welcome + user question)
    if (messages.length <= 2) {
      // For the first message, include the restaurant context
      const prompt = `${RESTAURANT_CONTEXT}\n\nUser question: ${lastUserMessage.content}`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      return {
        success: true,
        response: text,
      }
    } else {
      // For subsequent messages, include previous conversation as context
      // But format it as a text conversation, not using the chat API

      // Skip the welcome message (first message)
      const conversationHistory = messages.slice(1)

      // Format the conversation as text
      let conversationText = `${RESTAURANT_CONTEXT}\n\nConversation history:\n`

      for (let i = 0; i < conversationHistory.length - 1; i++) {
        const msg = conversationHistory[i]
        const role = msg.role === "user" ? "User" : "Assistant"
        conversationText += `${role}: ${msg.content}\n`
      }

      // Add the current question
      conversationText += `\nUser: ${lastUserMessage.content}\n\nAssistant:`

      // Generate the response
      const result = await model.generateContent(conversationText)
      const response = await result.response
      const text = response.text()

      return {
        success: true,
        response: text,
      }
    }
  } catch (error) {
    console.error("Error generating chat response:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"

    // Check for specific API key errors
    if (errorMessage.includes("API key not valid") || errorMessage.includes("API_KEY_INVALID")) {
      return {
        success: false,
        error: "API_KEY_INVALID",
        response:
          "I'm unable to respond right now. The Gemini API key appears to be invalid. Please check your API key configuration.",
      }
    }

    return {
      success: false,
      error: errorMessage,
      response: "I'm sorry, I encountered an error. Please try again later.",
    }
  }
}
