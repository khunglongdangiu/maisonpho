"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, AlertCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { generateChatResponse } from "@/app/actions/chat-actions"
import { useLanguage } from "@/contexts/language-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Message = {
  role: "user" | "model"
  content: string
}

interface ChatInterfaceProps {
  onClose: () => void
}

export function ChatInterface({ onClose }: ChatInterfaceProps) {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: t("chat.welcome"),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<{ type: string; message: string } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Update welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        role: "model",
        content: t("chat.welcome"),
      },
    ])
  }, [language, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setApiError(null)

    try {
      const result = await generateChatResponse([...messages, userMessage])

      if (result.success) {
        setMessages((prev) => [...prev, { role: "model", content: result.response }])
      } else {
        setMessages((prev) => [...prev, { role: "model", content: result.response || t("chat.error") }])

        // Check for specific error types
        if (result.error === "API_KEY_MISSING") {
          setApiError({
            type: "missing",
            message: "The Gemini API key is missing. Please add a valid API key to your environment variables.",
          })
        } else if (result.error === "API_KEY_INVALID") {
          setApiError({
            type: "invalid",
            message: "The Gemini API key is invalid. Please check that you've entered a valid API key.",
          })
        }
      }
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages((prev) => [...prev, { role: "model", content: t("chat.error") }])
    } finally {
      setIsLoading(false)
      // Focus the input after sending a message
      inputRef.current?.focus()
    }
  }

  // Add some quick reply suggestions
  const quickReplies = [
    { text: "Menu recommendations", query: "What are your signature dishes?" },
    { text: "Opening hours", query: "What are your opening hours?" },
    { text: "Make a reservation", query: "How can I make a reservation?" },
  ]

  const handleQuickReply = (query: string) => {
    setInput(query)
    // Focus and select the input text
    inputRef.current?.focus()
  }

  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-border">
      <div className="bg-primary p-4 text-white flex justify-between items-center">
        <h3 className="font-playfair text-lg font-semibold">{t("chat.title")}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0 text-white hover:bg-primary/80 rounded-full"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>

      {apiError && (
        <Alert variant="destructive" className="m-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="text-sm font-medium">API Key Error</AlertTitle>
          <AlertDescription className="text-xs mt-1">
            {apiError.message}
            <div className="mt-2">
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium hover:underline"
              >
                Get a Gemini API key
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-primary text-white rounded-tr-none"
                  : "bg-muted text-foreground rounded-tl-none"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground rounded-tl-none">
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"></div>
                <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick replies */}
      {messages.length <= 2 && (
        <div className="px-4 py-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply.query)}
                className="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded-full text-muted-foreground transition-colors"
              >
                {reply.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-border p-4 flex gap-2">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("chat.placeholder")}
          className="flex-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading || !input.trim()}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  )
}
