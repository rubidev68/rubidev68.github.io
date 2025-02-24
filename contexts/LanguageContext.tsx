"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "en" | "fr" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const getBrowserLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "en" || browserLang === "fr" || browserLang === "de") {
      return browserLang
    }
  }
  return "en" // Default to English if the browser language is not supported
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    setLanguage(getBrowserLanguage())
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

