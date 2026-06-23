"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="min-w-[100px] rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm transition hover:bg-white/10 active:scale-95"
      aria-label={`Switch language`}
    >
      {language === "zh" ? "🌐 EN" : "🌐 中文"}
    </button>
  );
}
