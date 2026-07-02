"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage, mounted } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="group flex size-8 items-center justify-center rounded-full bg-(--panel)/40 ring-1 ring-transparent transition-all duration-300 hover:bg-(--panel) hover:ring-(--accent)/50 active:scale-95"
    >
      <span className="font-serif text-[12px] font-bold text-(--foreground-muted) transition-colors duration-300 group-hover:text-(--accent)">
        {/* 在 mounted 之前不渲染文字，防止初始状态与服务端不一致导致的微小跳动 */}
        {mounted ? (language === "zh" ? "中" : "EN") : ""}
      </span>
    </button>
  );
}
