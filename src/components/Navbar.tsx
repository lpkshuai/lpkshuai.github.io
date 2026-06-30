"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useDictionary } from "@/hooks/useDictionary";

export default function Navbar() {
  const dict = useDictionary();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 移动端菜单打开时，禁止背后页面滚动 (增强全屏沉浸感)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: dict.nav.home },
    { href: "/notes", label: dict.nav.notes },
    { href: "/lab", label: dict.nav.lab },
    { href: "/about", label: dict.nav.about },
  ];

  return (
    <>
      {/* 顶部常规栏 (PC & 移动端共用骨架) */}
      <header className="sticky top-0 z-50 border-b border-(--panel-border) bg-(--background)/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          {/* === Logo 区域 (保持不变) === */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 px-1 py-1 overflow-visible z-50"
          >
            <div className="absolute -top-6 left-0 right-0 bottom-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-3 w-[2px] h-8 bg-linear-to-t from-transparent to-(--accent) translate-y-0 group-hover:-translate-y-16 transition-transform duration-700 ease-out"></div>
              <div className="absolute bottom-0 left-7 w-px h-6 bg-linear-to-t from-transparent to-(--accent-strong) translate-y-0 group-hover:-translate-y-20 transition-transform duration-1000 ease-out delay-75"></div>
            </div>
            <div className="relative flex size-8 items-center justify-center rounded border border-(--accent-strong) bg-(--panel) shadow-[0_0_10px_rgba(56,189,248,0.15)] transition-all duration-300 group-hover:border-(--accent) group-hover:shadow-[0_0_15px_var(--accent)] overflow-hidden">
              <span className="font-mono text-[10px] font-black text-(--accent-strong) transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                LV
              </span>
              <span className="absolute font-mono text-[10px] font-black text-(--accent) translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:animate-pulse">
                UP!
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-sm font-black tracking-[0.15em] text-(--foreground) transition-colors duration-300 group-hover:text-(--accent)">
                  PERSONAL LAB
                </span>
                <span className="text-[10px] font-mono text-(--foreground-dim) opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:text-(--accent) group-hover:animate-bounce">
                  ▲
                </span>
              </div>
              <div className="mt-1 h-1 w-28 rounded-full bg-(--panel-border) overflow-hidden border border-white/5">
                <div className="h-full w-[70%] bg-linear-to-r from-(--accent-strong) to-(--accent) transition-all duration-500 ease-out group-hover:w-full group-hover:animate-pulse"></div>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-6 z-50">
            {/* PC 端主导航 (底部下划线光晕风) */}
            <nav className="hidden sm:block" aria-label="Primary navigation">
              <ul className="flex items-center mr-6 gap-4 font-mono text-sm font-bold uppercase tracking-widest">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`group relative py-2 transition-colors ${isActive ? "text-(--accent)" : "text-(--foreground-muted) hover:text-(--foreground)"}`}
                      >
                        {item.label}
                        {/* 底部能量条 */}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-(--accent) transition-all duration-300 ${isActive ? "w-full shadow-[0_0_8px_var(--accent)]" : "w-0 group-hover:w-full"}`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* 移动端开关 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex size-8 flex-col items-center justify-center gap-1.5 sm:hidden relative z-50"
            >
              <span
                className={`block h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMenuOpen ? "translate-y-[8px] rotate-45 bg-(--accent)" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-(--foreground) transition-all duration-300 ${isMenuOpen ? "translate-y-[-8px] -rotate-45 bg-(--accent)" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* === 移动端全屏劫持菜单 === */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-(--background)/98 backdrop-blur-2xl transition-all duration-500 sm:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none scale-105"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 font-mono tracking-widest uppercase">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-4xl font-black transition-all duration-300 hover:scale-110 ${
                  isActive
                    ? "text-(--accent) drop-shadow-[0_0_15px_var(--accent)]"
                    : "text-(--foreground-dim) hover:text-(--foreground)"
                }`}
                style={{
                  transitionDelay: `${isMenuOpen ? index * 100 : 0}ms`,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 全屏底部的极客装饰 */}
        <div
          className={`absolute bottom-10 font-mono text-[10px] text-(--foreground-dim) transition-opacity duration-700 delay-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        >
          SYSTEM_NAV_OVERRIDE_ACTIVE // [AWAITING_INPUT]
        </div>
      </div>
    </>
  );
}
