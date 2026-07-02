"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "zh" | "en";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  mounted: boolean; // 暴露 mounted 状态供组件使用
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 初始值必须与服务端渲染一致 (假设默认是 en)
  const [language, setLanguageState] = useState<Language>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang") as Language | null;
    const currentLang = savedLang || "zh";

    setLanguageState(currentLang);
    document.documentElement.lang = currentLang;

    // 语言确定后，恢复页面显示 (配合 layout.tsx 中的脚本)
    document.documentElement.style.visibility = "visible";
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage, mounted }}
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
