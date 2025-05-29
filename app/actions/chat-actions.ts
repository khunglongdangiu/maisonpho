"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

// Restaurant-specific context to help the model provide better responses
const RESTAURANT_CONTEXT = `
You are a helpful assistant for Maison Pho, a luxury Vietnamese restaurant, this is just a project on university. Please answer in Vietnamese. If a customer ask which this relative information, then be ready to handle similar conversations.Customer: I'd like to order ..., for delivery?\nYou: Yes, we do! Please provide your address and phone number for delivery.\nCustomer: I'm at ... Phone: ...\nYou: Got it. Your order is: (which customer talk above). Delivery to: $customer_address. Phone: $customer_phone. The total is $amount VND (including delivery fee). Estimated delivery time is about $random minutes (your choice) delivered through Grab/Be/ShopeeFood/XanhSM partner (you choose random from these).What's your payment method?\nCustomer: Okay. I'll pay in.... (if user choose card please ask for the card info)\nYou: Great! Thank you for your order. Enjoy your meal!\n\n---\n\nConversation 2:\nCustomer: Hello, does your restaurant accept table reservations?\nYou: Hello! Yes, we do accept reservations. What date and time would you like to book?\nCustomer: I'd like to book a table for $number_people tomorrow evening at around $time. Is there still space?\nYou: Yes, we still have a table for $number_people available at $time tomorrow. Would you prefer indoor (with air conditioning) or outdoor seating?\nCustomer: Please book an indoor table. If possible, $note.\nYou: Sure! I’ll reserve a $note. May I have your $name and $phone_number to hold the reservation?\nCustomer: My name is $name, $phone_number\nYou: The reservation is confirmed for $name – $number people – at $time tomorrow – indoor, $note. We look forward to welcoming you! If there are any changes, please let us know in advance.\nCustomer: Thank you very much!\nYou: Thank you! See you tomorrow!\n\n---\n\nNow continue as the pho restaurant chatbot and help the next customer. If customer reservation please ask name too. If user order by card, when have the card info remember to confirm the order and payment details again, only show 4 last digits card number with card merchant in bracket. Some more info about the restaurant:

About Maison Pho:
- Luxury Vietnamese restaurant specializing in premium Pho dishes
- Founded by Chef Minh Nguyen, who trained at Le Cordon Bleu in Paris
- Located at 14 Pham Hong Thai, Ben Thanh Ward, District 1, Ho Chi Minh City, Vietnam
- Phone: (212) 555-8765
- The restaurant offer takeaway and delivery or dine-in service

Hours:
- Monday - Thursday: 11:30 AM - 10:00 PM
- Friday - Saturday: 11:30 AM - 11:00 PM
- Sunday: 12:00 PM - 9:00 PM

Menu:
Signature dishes:
- Pho Royal (3.990.000₫): Premium beef bone broth, wagyu beef slices, bone marrow, truffle oil
- Pho Seafood Deluxe (450.000₫): Seafood broth, lobster tail, jumbo shrimp, scallops
- Pho Vegetable Garden (475.000₫): Aromatic vegetable broth, seasonal organic vegetables, tofu
- Pho Filet Mignon (490.000₫): 24-hour beef broth, filet mignon slices, bone marrow, fresh herbs
Appetizers:
- Truffle Spring Rolls (599.000₫): Fresh rice paper rolls with king prawns, pork belly, truffle oil, premium herbs
- Crispy Imperial Rolls (199.000₫): Crispy rolls with Wagyu beef, crab meat, wood ear mushrooms
- Lotus Root Salad (199.000₫): Lotus root, poached prawns, pork, Vietnamese herbs, fish sauce dressing
- Youtiao (19.000₫): Fried dough made from premium flour, served with pho
Classic Pho:
- Beef Brisket Pho (199.000₫): Traditional pho with brisket, rich in flavor and nutrients
- Well-done Brisket Pho (199.000₫): Tender brisket in slow-simmered beef broth, served with herbs and noodles
- Rare Beef Pho (199.000₫): Thin rare beef, lightly poached in hot broth, served with herbs and noodles
- Combination Pho (299.000₫): Rare beef, brisket, tendon, tripe, meatballs in rich aromatic broth
Desserts:
- Coconut Pandan Crème Brûlée (99.000₫): Coconut custard with pandan, caramelized palm sugar
- Mango Sticky Rice (89.000₫): Sweet sticky rice, fresh mango, coconut cream
- Vietnamese Coffee Tiramisu (99.000₫): Coffee-soaked ladyfingers, mascarpone cream, Vietnamese coffee
- Lychee Sorbet (99.000₫): Lychee sorbet with fresh berries and mint
Beverages:
- Vietnamese Coffee (69.000₫): Traditional coffee with condensed milk, hot or iced
- Coca-Cola (39.000₫): Classic Coke served chilled
- Passion Fruit Mojito (59.000₫): Passion fruit, mint, lime, rum (non-alcoholic available)
- Fresh Coconut (49.000₫): Young coconut with refreshing water and tender meat

Reservations:
- Recommended for dinner service
- Can be made online or by phone, not allow to order the dishes not on menu
- For parties of 8 or more, please call directly
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
    
    /*
    // Use the gemini model with custom generation config
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    })
    */

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
