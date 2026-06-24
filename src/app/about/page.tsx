"use client";

import Link from "next/link";

import { useDictionary } from "@/hooks/useDictionary";

import { achievementsZh } from "@/content/about/achievements.zh";
import { achievementsEn } from "@/content/about/achievements.en";
import { useLanguage } from "@/contexts/LanguageContext";

const stack = {
  core: [
    "Vue",
    "React",
    "HTML",
    "Tailwindcss",
    "JavaScript",
    "UniApp",
    "React native",
  ],
  learning: ["Next.js", "React Server Components", "Motion UI", "Three.js"],
};

export default function AboutPage() {
  const dict = useDictionary();
  const about = dict.about;

  const { language } = useLanguage();
  const achievements = language === "zh" ? achievementsZh : achievementsEn;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 selection:bg-(--accent)/30">
      {/* 玩家主横幅 (Profile Banner) */}
      <div className="relative rounded-2xl overflow-hidden bg-(--panel) border border-(--panel-border) shadow-xl mb-10">
        {/* 顶部背景图/渐变 */}
        <div className="h-32 bg-linear-to-r from-(--accent-strong)/20 via-(--accent)/20 to-(--background)"></div>

        <div className="px-8 pb-8 pt-4 relative">
          {/* 头像占位 / 等级 */}
          <div className="absolute -top-12 left-8 w-24 h-24 rounded-2xl bg-(--background) border-4 border-(--panel) flex items-center justify-center shadow-lg rotate-3">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-(--accent) to-(--accent-strong)">
              L
            </span>
          </div>

          <div className="ml-32 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-(--foreground)">
                pkli
              </h1>
              <p className="text-(--foreground-muted) text-sm mt-1 font-medium">
                {about.profile.subtitle}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-center px-4 py-2 bg-(--background) rounded-lg border border-(--panel-border)">
                <p className="text-xs text-(--foreground-dim) uppercase font-bold">
                  {about.profile.playtime}
                </p>
                <p className="text-lg font-bold text-(--accent)">6+ Yrs</p>
              </div>
              <div className="text-center px-4 py-2 bg-(--background) rounded-lg border border-(--panel-border)">
                <p className="text-xs text-(--foreground-dim) uppercase font-bold">
                  {about.profile.trophies}
                </p>
                <p className="text-lg font-bold text-(--accent-strong)">
                  {achievements.filter((a) => a.unlocked).length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        {/* 左侧：装备栏 & 好友联络 */}
        <div className="space-y-8">
          {/* 技能徽章 (Badges) */}
          <div className="bg-(--panel) rounded-2xl p-6 border border-(--panel-border)">
            <h2 className="text-sm font-bold uppercase tracking-wider text-(--foreground) mb-4 flex justify-between">
              <span>{about.stack.equipped}</span>
              <span className="text-(--accent)">{about.stack.core}</span>
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {stack.core.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-(--background) border border-(--panel-border) text-xs font-semibold text-(--foreground-muted) hover:text-(--foreground) transition-colors shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <h2 className="text-sm font-bold uppercase tracking-wider text-(--foreground) mb-4 flex justify-between pt-4 border-t border-(--panel-border)">
              <span>{about.stack.nextSkillTree}</span>
              <span className="text-(--accent-strong) animate-pulse">
                {about.stack.grinding}
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {stack.learning.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-(--accent-strong)/10 border border-(--accent-strong)/30 text-xs font-bold text-(--accent-strong) shadow-[0_0_10px_var(--accent-bg)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 联机卡片 (Multiplayer) */}
          <div className="bg-(--panel) rounded-2xl p-6 border border-(--panel-border) text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-(--foreground)">
              {about.social.title}
            </h2>
            <p className="text-xs text-(--foreground-muted) leading-relaxed">
              {about.social.description}
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="https://github.com/lpkshuai/"
                target="_blank"
                className="py-2.5 rounded-lg bg-(--foreground) text-(--background) text-sm font-bold hover:scale-[1.02] active:scale-95 transition-transform"
              >
                {about.social.github}
              </Link>
              <Link
                href="https://www.cnblogs.com/lpkshuai"
                target="_blank"
                className="py-2.5 rounded-lg bg-(--background) border border-(--panel-border) text-(--foreground) text-sm font-bold hover:bg-(--panel-border) transition-colors"
              >
                {about.social.blog}
              </Link>
            </div>
          </div>
        </div>

        {/* 右侧：成就列表 (Achievements) */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-(--foreground) pl-2">
            {about.achievements.title}
          </h2>

          <div className="space-y-4">
            {achievements.map((achieve, idx) => (
              <div
                key={idx}
                className={`flex gap-5 p-5 rounded-2xl border transition-all duration-300 ${
                  achieve.unlocked
                    ? "bg-(--panel) border-(--panel-border) hover:border-(--accent) hover:shadow-lg"
                    : "bg-(--background) border-dashed border-(--panel-border) opacity-60 grayscale hover:grayscale-0"
                }`}
              >
                {/* 成就图标/奖杯 */}
                <div
                  className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center shadow-inner ${
                    achieve.unlocked
                      ? "bg-(--background) border-2 border-(--accent)"
                      : "bg-(--panel) border-2 border-(--panel-border)"
                  }`}
                >
                  <span
                    className={`text-xl ${achieve.unlocked ? "text-(--accent)" : "text-(--foreground-dim)"}`}
                  >
                    {achieve.unlocked ? "🏆" : "🔒"}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`font-bold ${achieve.unlocked ? "text-(--foreground)" : "text-(--foreground-muted)"}`}
                    >
                      {achieve.title}
                    </h3>
                    <span className="text-xs font-mono text-(--foreground-dim) bg-(--background) px-2 py-0.5 rounded border border-(--panel-border)">
                      {achieve.year}
                    </span>
                  </div>
                  <p className="text-sm text-(--foreground-muted) leading-relaxed">
                    {achieve.desc}
                  </p>

                  {/* 未解锁成就的进度条 */}
                  {!achieve.unlocked && (
                    <div className="pt-3">
                      <div className="flex justify-between text-[10px] uppercase font-bold text-(--accent-strong) mb-1">
                        <span>{about.achievements.grinding}</span>
                        <span>35%</span>
                      </div>
                      <div className="h-1.5 w-full bg-(--background) rounded-full overflow-hidden border border-(--panel-border)">
                        <div className="h-full bg-(--accent-strong) w-[35%]"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
