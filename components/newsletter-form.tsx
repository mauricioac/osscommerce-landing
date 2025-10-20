"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react"

interface NewsletterFormProps {
  size?: "sm" | "md" | "lg"
  className?: string
  placeholder?: string
  buttonText?: string
  showIcon?: boolean
  variant?: "light" | "dark"
  source?: string
  groups?: string[]
}

export function NewsletterForm({
  size = "md",
  className = "",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  showIcon = false,
  variant = "dark",
  source = "website",
  groups = []
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_NEWSLETTER_API_URL || "/api/newsletter"

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source,
          groups
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Thank you for subscribing!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please check your connection and try again.")
    }
  }

  const inputSizeClasses = {
    sm: "text-sm py-2",
    md: "text-base py-3", 
    lg: "text-lg py-4"
  }

  const buttonSizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8"
  }

  const inputVariantClasses = variant === "light"
    ? "bg-white border-gray-300 focus:border-[#F6B86C] text-gray-900 placeholder:text-gray-500"
    : "bg-white/10 border-white/20 focus:border-[#F6B86C] text-white placeholder:text-white/60"

  const iconVariantClasses = variant === "light"
    ? "text-gray-500"
    : "text-white/60"

  const textVariantClasses = variant === "light"
    ? "text-gray-600"
    : "text-white/60"

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            {showIcon && (
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${iconVariantClasses}`} />
            )}
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={status === "loading"}
              className={`
                ${showIcon ? "pl-10" : ""}
                ${inputSizeClasses[size]}
                ${inputVariantClasses}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`
              ${buttonSizeClasses[size]}
              bg-gradient-to-r from-[#F6B86C] to-[#FF8C42] hover:from-[#E6A05C] hover:to-[#F6B86C] 
              text-[#1E0D43] font-semibold shadow-lg shadow-[#F6B86C]/25
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              transition-all duration-200 hover:scale-105
            `}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Subscribed!
              </>
            ) : (
              buttonText
            )}
          </Button>
        </div>

        {status === "success" && (
          <Alert className="bg-emerald-500/20 border-emerald-500/30 text-emerald-300">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {status === "error" && (
          <Alert className="bg-red-500/20 border-red-500/30 text-red-300">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </form>

      {status === "idle" && (
        <p className={`text-xs mt-2 text-center ${textVariantClasses}`}>
          {t('footer.newsletter.noSpam')}
        </p>
      )}
    </div>
  )
}