import Link from "next/link";

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

const achievements = [
  {
    year: "2019",
    title: "First Blood: 踏入前端领域",
    desc: "使用 Vue 2 和小程序完成了最初的代码构建，解锁 [网页开发者] 称号。",
    unlocked: true,
  },
  {
    year: "2022",
    title: "Mastery: 跨端大师",
    desc: "熟练掌握 Vue 3 与 UniApp，实现在移动端 H5 与多端环境下的无缝穿梭。",
    unlocked: true,
  },
  {
    year: "2023",
    title: "Expansion: 认知拓展",
    desc: "点亮 React Native 技能树，并将 AI 辅助开发正式编入日常作战流。",
    unlocked: true,
  },
  {
    year: "2025",
    title: "Veteran: 架构重塑者",
    desc: "双端精通。能够独立完成前端工程化基建与复杂组件库架构的搭建。",
    unlocked: true,
  },
  {
    year: "2026",
    title: "Awakening: 视觉觉醒",
    desc: "正在构建 Personal Lab。向着 WebGL 和高阶动效发起最终冲刺。",
    unlocked: false, // 正在进行中的成就
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 selection:bg-[var(--accent)]/30">
      {/* 玩家主横幅 (Profile Banner) */}
      <div className="relative rounded-2xl overflow-hidden bg-[var(--panel)] border border-[var(--panel-border)] shadow-xl mb-10">
        {/* 顶部背景图/渐变 */}
        <div className="h-32 bg-gradient-to-r from-[var(--accent-strong)]/20 via-[var(--accent)]/20 to-[var(--background)]"></div>

        <div className="px-8 pb-8 pt-4 relative">
          {/* 头像占位 / 等级 */}
          <div className="absolute -top-12 left-8 w-24 h-24 rounded-2xl bg-[var(--background)] border-4 border-[var(--panel)] flex items-center justify-center shadow-lg rotate-3">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)]">
              L
            </span>
          </div>

          <div className="ml-32 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[var(--foreground)]">
                pkli
              </h1>
              <p className="text-[var(--foreground-muted)] text-sm mt-1 font-medium">
                Frontend Developer & Creative Explorer
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-center px-4 py-2 bg-[var(--background)] rounded-lg border border-[var(--panel-border)]">
                <p className="text-xs text-[var(--foreground-dim)] uppercase font-bold">
                  Playtime
                </p>
                <p className="text-lg font-bold text-[var(--accent)]">6+ Yrs</p>
              </div>
              <div className="text-center px-4 py-2 bg-[var(--background)] rounded-lg border border-[var(--panel-border)]">
                <p className="text-xs text-[var(--foreground-dim)] uppercase font-bold">
                  Trophies
                </p>
                <p className="text-lg font-bold text-[var(--accent-strong)]">
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
          <div className="bg-[var(--panel)] rounded-2xl p-6 border border-[var(--panel-border)]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)] mb-4 flex justify-between">
              <span>Equipped Loadout</span>
              <span className="text-[var(--accent)]">Core</span>
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {stack.core.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--panel-border)] text-xs font-semibold text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)] mb-4 flex justify-between pt-4 border-t border-[var(--panel-border)]">
              <span>Next Skill Tree</span>
              <span className="text-[var(--accent-strong)] animate-pulse">
                Grinding
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {stack.learning.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[var(--accent-strong)]/10 border border-[var(--accent-strong)]/30 text-xs font-bold text-[var(--accent-strong)] shadow-[0_0_10px_var(--accent-bg)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 联机卡片 (Multiplayer) */}
          <div className="bg-[var(--panel)] rounded-2xl p-6 border border-[var(--panel-border)] text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">
              Join Session
            </h2>
            <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
              Always open for co-op development, technical discussions, or
              exploring new web paradigms.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="https://github.com/lpkshuai/"
                target="_blank"
                className="py-2.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-bold hover:scale-[1.02] active:scale-95 transition-transform"
              >
                Add on GitHub
              </Link>
              <Link
                href="https://www.cnblogs.com/lpkshuai"
                target="_blank"
                className="py-2.5 rounded-lg bg-[var(--background)] border border-[var(--panel-border)] text-[var(--foreground)] text-sm font-bold hover:bg-[var(--panel-border)] transition-colors"
              >
                View Blog Stats
              </Link>
            </div>
          </div>
        </div>

        {/* 右侧：成就列表 (Achievements) */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-[var(--foreground)] pl-2">
            Milestone Achievements
          </h2>

          <div className="space-y-4">
            {achievements.map((achieve, idx) => (
              <div
                key={idx}
                className={`flex gap-5 p-5 rounded-2xl border transition-all duration-300 ${
                  achieve.unlocked
                    ? "bg-[var(--panel)] border-[var(--panel-border)] hover:border-[var(--accent)] hover:shadow-lg"
                    : "bg-[var(--background)] border-dashed border-[var(--panel-border)] opacity-60 grayscale hover:grayscale-0"
                }`}
              >
                {/* 成就图标/奖杯 */}
                <div
                  className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center shadow-inner ${
                    achieve.unlocked
                      ? "bg-[var(--background)] border-2 border-[var(--accent)]"
                      : "bg-[var(--panel)] border-2 border-[var(--panel-border)]"
                  }`}
                >
                  <span
                    className={`text-xl ${achieve.unlocked ? "text-[var(--accent)]" : "text-[var(--foreground-dim)]"}`}
                  >
                    {achieve.unlocked ? "🏆" : "🔒"}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`font-bold ${achieve.unlocked ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}
                    >
                      {achieve.title}
                    </h3>
                    <span className="text-xs font-mono text-[var(--foreground-dim)] bg-[var(--background)] px-2 py-0.5 rounded border border-[var(--panel-border)]">
                      {achieve.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {achieve.desc}
                  </p>

                  {/* 未解锁成就的进度条 */}
                  {!achieve.unlocked && (
                    <div className="pt-3">
                      <div className="flex justify-between text-[10px] uppercase font-bold text-[var(--accent-strong)] mb-1">
                        <span>Grinding in progress...</span>
                        <span>45%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[var(--background)] rounded-full overflow-hidden border border-[var(--panel-border)]">
                        <div className="h-full bg-[var(--accent-strong)] w-[45%]"></div>
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
