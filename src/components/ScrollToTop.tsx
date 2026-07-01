"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动条位置，控制显隐
  useEffect(() => {
    const toggleVisibility = () => {
      // 页面向下滚动超过 300px 时显示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 执行平滑滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="返回顶部"
      className={`fixed bottom-6 right-6 z-50 group flex size-10 items-center justify-center overflow-hidden rounded border border-(--panel-border) bg-(--panel) text-(--foreground-muted) transition-all duration-300 hover:border-(--accent) hover:text-(--accent) hover:shadow-[0_0_15px_var(--accent)] active:scale-90 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      {/* 战术 HUD 边角装饰（悬浮时显现） */}
      <span className="absolute left-0 top-0 size-1.5 border-b border-r border-(--accent) opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="absolute bottom-0 right-0 size-1.5 border-l border-t border-(--accent) opacity-0 transition-opacity group-hover:opacity-100" />

      {/* 核心图标，悬浮时轻微上浮 */}
      <ChevronUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
