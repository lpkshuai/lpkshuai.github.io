"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Language = "zh" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const [mounted, setMounted] = useState(false);

  // 初始化
  useEffect(() => {
    setMounted(true);

    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  // 持久化
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("language", language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
