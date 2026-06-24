"use client";

import Link from "next/link";
import { useState } from "react";

import { useDictionary } from "@/hooks/useDictionary";

const topics = ["Vue & React", "TypeScript", "Tailwind CSS", "Web Animation"];

const cardConfig = [
  {
    key: "lab",
    href: "/lab",

    rarityClass:
      "border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-purple-50/50 dark:hover:bg-purple-500/[0.02]",

    tag: "EPIC / 史诗",
  },

  {
    key: "notes",
    href: "/notes",

    rarityClass:
      "border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:bg-blue-50/50 dark:hover:bg-blue-500/[0.02]",

    tag: "RARE / 稀有",
  },

  {
    key: "about",
    href: "/about",

    rarityClass:
      "border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:bg-amber-50/50 dark:hover:bg-amber-500/[0.02]",

    tag: "LEGENDARY / 传说",
  },
] as const;

type CardItem = {
  label: string;
  desc: string;
  href: string;
  rarityClass: string;
  tag: string;
};

// 独立的 3D 卡片组件
function Card3D({ item }: { item: CardItem }) {
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-4px)`,
    );
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0) rotateY(0) scale(1) translateY(0)",
    );
    setGlarePos({ x: 50, y: 50 });
  };

  const getGlowColor = (tag: string) => {
    if (tag.includes("EPIC")) return "rgba(168, 85, 247, 0.12)";
    if (tag.includes("RARE")) return "rgba(59, 130, 246, 0.12)";
    return "rgba(234, 179, 8, 0.12)"; // 固定的琥珀色高光
  };

  return (
    <li key={item.label} style={{ perspective: "1000px" }}>
      <Link
        href={item.href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative block h-full rounded-lg border bg-[var(--panel)] p-5 transition-transform duration-200 ease-out ${item.rarityClass} group/card active:scale-[0.99] shadow-sm dark:shadow-none overflow-hidden`}
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${getGlowColor(item.tag)}, transparent 50%)`,
          }}
        />

        <div
          className="relative z-10 flex flex-col h-full"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="absolute top-0 right-0 font-mono text-[9px] tracking-widest opacity-60 dark:opacity-40 group-hover/card:opacity-100 transition-opacity">
            {item.tag}
          </span>

          <span className="font-mono font-bold tracking-wide text-[var(--foreground)] group-hover/card:text-current block">
            {item.label}
          </span>

          <p className="mt-4 text-sm leading-6 text-[var(--foreground-muted)] transition-colors group-hover/card:text-[var(--foreground)] flex-1">
            {item.desc}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function Hero() {
  const dict = useDictionary();
  
  const hero = dict.home.hero;
  const cards = hero.cards;
  const panel = hero.panel;

  const cardStack = cardConfig.map((item) => ({
    ...item,
    label: cards[item.key].title,
    desc: cards[item.key].desc,
  }));

  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-center gap-10 px-6 py-16 selection:bg-(--accent)/30">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* 左侧：主文本与核心操作区域 */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-sm border border-(--panel-border) bg-(--panel)/60 px-3 py-1.5 text-xs text-(--foreground-muted) font-mono">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>{hero.bootMessage}</span>
            {/* 新增：终端闪烁光标 */}
            <span className="inline-block w-1.5 h-3 bg-[var(--accent)] animate-blink ml-0.5"></span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-balance md:text-6xl leading-tight">
              {hero.title.line1}
              <br />
              <span className="font-serif italic tracking-wide bg-gradient-to-r from-[var(--accent)] to-amber-500 bg-clip-text text-transparent">
                {hero.title.line2}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              {hero.description}
            </p>
          </div>

          {/* 技能标签组 */}
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-sm border border-[var(--panel-border)] bg-[var(--panel)]/40 px-3 py-1 text-[11px] uppercase tracking-widest text-[var(--foreground-muted)] font-mono"
              >
                [{topic}]
              </span>
            ))}
          </div>

          {/* 交互按钮 */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/lab"
              className="group relative overflow-hidden rounded-md bg-[var(--accent)] px-6 py-3 font-mono text-sm font-bold tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--accent)] active:scale-95"
            >
              <span className="relative z-10">{hero.actions.enterLab}</span>
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="/notes"
              className="group rounded-md border border-[var(--panel-border)] bg-[var(--panel)]/40 px-6 py-3 font-mono text-sm font-bold tracking-wider text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] active:scale-95"
            >
              {hero.actions.openArchive}
            </Link>
          </div>
        </div>

        {/* 右侧：沉浸式游戏面板 Game Status Panel */}
        <aside className="rounded-lg border border-[var(--panel-border)] bg-[var(--panel)]/60 p-6 shadow-xl dark:shadow-black/40 font-mono relative overflow-hidden group">
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--accent)]/10 blur-3xl transition-opacity group-hover:opacity-70" />

          <div className="flex items-center justify-between border-b border-[var(--panel-border)] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-widest uppercase text-[var(--foreground)]">
                {panel.profile}
              </span>
            </div>
            <span className="px-2 py-0.5 text-[10px] bg-[var(--foreground)] text-[var(--background)] font-bold uppercase rounded-sm tracking-wider">
              ID: LPKShuai
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <p className="text-[var(--foreground-dim)] uppercase font-bold tracking-wider">
                  {panel.primaryClass}
                </p>
                <p className="font-bold text-[var(--accent)] text-sm">
                  Frontend Engineer
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--foreground-dim)] uppercase font-bold tracking-wider">
                  {panel.subClass}
                </p>
                <p className="font-bold text-[var(--foreground)] text-sm">
                  Creative Developer
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase flex justify-between font-bold text-[var(--foreground-dim)]">
                <span className="tracking-wider">
                  {panel.questTitle}: {panel.questName}
                </span>
                <span className="text-[var(--accent)]">45%</span>
              </div>
              <div className="relative h-2.5 w-full bg-[var(--panel-border)] rounded-full overflow-hidden p-[1px]">
                <div className="h-full bg-gradient-to-r from-[var(--accent)] to-amber-400 rounded-full w-[45%] shadow-[0_0_10px_var(--accent)]"></div>
                <div className="absolute top-0 left-0 h-full w-[45%] overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[var(--foreground-dim)] text-xs uppercase font-bold tracking-wider">
                {panel.skills}
              </p>
              <div className="flex gap-2">
                {["Vu", "Re", "Ts", "An"].map((rune, idx) => {
                  const runeNames = [
                    "Vue.js Ecosystem",
                    "React Ecosystem",
                    "TypeScript",
                    "Web Animation",
                  ];
                  return (
                    <div
                      key={idx}
                      className="h-9 w-9 rounded border border-[var(--panel-border)] bg-[var(--panel)] flex items-center justify-center text-xs font-bold text-[var(--foreground-dim)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-help"
                      title={runeNames[idx]}
                    >
                      {rune}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-sm border-l-2 border-green-500 bg-green-500/5 dark:bg-green-500/10 p-3 text-xs leading-5 text-[var(--foreground-muted)]">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1 uppercase tracking-wider">
                ⚡ ACTIVE BUFF: {panel.buff.title}
              </span>
              {panel.buff.description}
            </div>
          </div>
        </aside>
      </div>

      {/* 底部：三格装备栏 / 路由入口 */}
      <div className="pt-8 border-t border-[var(--panel-border)]">
        <ul className="grid gap-4 md:grid-cols-3">
          {cardStack.map((item) => (
            <Card3D key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
