"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

import { useDictionary } from "@/hooks/useDictionary";

export default function Navbar() {
  const dict = useDictionary();

  const navItems = [
    {
      href: "/",
      label: dict.nav.home,
    },
    {
      href: "/notes",
      label: dict.nav.notes,
    },
    {
      href: "/lab",
      label: dict.nav.lab,
    },
    {
      href: "/projects",
      label: dict.nav.projects,
    },
    {
      href: "/about",
      label: dict.nav.about,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* <Link href="/" className="text-sm font-bold tracking-[0.2em]">
          PERSONAL LAB
        </Link> */}

        <Link
          href="/"
          className="group relative flex items-center gap-3 py-2 px-1 overflow-visible"
        >
          {/* 【特效层】光柱升腾效果：鼠标悬浮时，绝对定位的光束向上暴冲 */}
          <div className="absolute -top-6 left-0 right-0 bottom-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* 粒子光束 1 */}
            <div className="absolute bottom-0 left-3 w-[2px] h-8 bg-gradient-to-t from-transparent to-[var(--accent)] translate-y-0 group-hover:-translate-y-16 transition-transform duration-700 ease-out"></div>
            {/* 粒子光束 2 */}
            <div className="absolute bottom-0 left-7 w-[1px] h-6 bg-gradient-to-t from-transparent to-[var(--accent-strong)] translate-y-0 group-hover:-translate-y-20 transition-transform duration-1000 ease-out delay-75"></div>
          </div>

          {/* 【核心徽章】左侧等级框 */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded border border-[var(--accent-strong)] bg-[var(--panel)] shadow-[0_0_10px_rgba(56,189,248,0.15)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_15px_var(--accent)] overflow-hidden">
            {/* 平时状态：静态显示 "LV" */}
            <span className="font-mono text-[10px] font-black text-[var(--accent-strong)] transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
              LV
            </span>

            {/* 悬浮状态：从下方滑入并闪烁的 "UP!" */}
            <span className="absolute font-mono text-[10px] font-black text-[var(--accent)] translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:animate-pulse">
              UP!
            </span>
          </div>

          {/* 【文本与经验条】右侧区域 */}
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-sm font-black tracking-[0.15em] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                PERSONAL LAB
              </span>
              {/* 升级小箭头跳动 */}
              <span className="text-[10px] font-mono text-[var(--foreground-dim)] opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:text-[var(--accent)] group-hover:animate-bounce">
                ▲
              </span>
            </div>

            {/* 【经验条机制】 */}
            <div className="mt-1 h-1 w-28 rounded-full bg-[var(--panel-border)] overflow-hidden border border-white/5">
              {/* 内部进度条：平时 70%（蓄势待发），悬浮时瞬间拉满到 100% 并伴随闪烁效果 */}
              <div className="h-full w-[70%] bg-gradient-to-r from-[var(--accent-strong)] to-[var(--accent)] transition-all duration-500 ease-out group-hover:w-full group-hover:animate-pulse"></div>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav
            className="w-full overflow-x-auto sm:w-auto sm:overflow-visible"
            aria-label="Primary navigation"
          >
            <ul className="flex min-w-max gap-1 text-sm text-foreground/70 sm:min-w-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-foreground active:scale-95"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
