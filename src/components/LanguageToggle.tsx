"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="group flex size-8 items-center justify-center rounded-full bg-(--panel)/40 ring-1 ring-transparent transition-all duration-300 hover:bg-(--panel) hover:ring-(--accent)/50 active:scale-95"
    >
      {/* 抛弃图标，直接使用极简文字，类似魔法书上的刻字 */}
      <span className="font-serif text-[12px] font-bold text-(--foreground-muted) transition-colors duration-300 group-hover:text-(--accent)">
        {language === "zh" ? "中" : "EN"}
      </span>
    </button>
  );
}
