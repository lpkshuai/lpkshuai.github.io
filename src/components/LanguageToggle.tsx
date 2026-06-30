"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex size-9 items-center justify-center rounded bg-panel transition-all duration-200 hover:border-accent hover:bg-accent-bg active:scale-90"
      aria-label="Switch language"
    >
      <Languages className="size-4 text-foreground/70 transition-colors group-hover:text-accent" />
      {/* 增加一个小标签，显示当前状态，更有“装备感” */}
      {/* <span className="absolute -top-1 -right-1 text-[8px] font-bold text-accent opacity-80">
        {language === "zh" ? "中" : "EN"}
      </span> */}
    </button>
  );
}
