import Link from "next/link";

const topics = ["Vue & React", "TypeScript", "Tailwind CSS", "Web Animation"];

const cardStack = [
  {
    label: "Lab / 实验场",
    desc: "Interactive demos, motion experiments, and small frontend ideas built while learning.",
    href: "/lab",
    // 史诗级（紫色）动态发光样式
    rarityClass:
      "border-purple-500/30 text-purple-300 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:bg-purple-500/5",
    tag: "EPIC / 史诗",
  },
  {
    label: "Notes / 知识库",
    desc: "A growing collection of Markdown notes about frontend, frameworks, and problem solving.",
    href: "/notes",
    // 稀有级（蓝色）动态发光样式
    rarityClass:
      "border-blue-400/20 text-blue-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:bg-blue-500/5",
    tag: "RARE / 稀有",
  },
  {
    label: "About / 角色面板",
    desc: "关于我、主修技术栈、当前的进化路线，以及如何在这个充满代码的数字世界中建立连接。",
    href: "/about",
    // 普通级（常规色）动态发光样式
    rarityClass:
      "border-[var(--panel-border)] text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(234,179,8,0.12)] hover:bg-[var(--accent-bg)]",
    tag: "COMMON / 普通",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-center gap-10 px-6 py-16 selection:bg-(--accent)/30">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* 左侧：主文本与核心操作区域 */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-sm border border-(--panel-border) bg-(--panel)/60 px-3 py-1 text-xs text-(--foreground-muted) font-mono">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span>&gt; system.init("Frontend_Architect");</span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-balance md:text-6xl leading-tight">
              构建扎实的前端架构，
              <br />
              <span className="font-serif italic tracking-wide bg-gradient-to-r from-[var(--accent)] to-amber-500 bg-clip-text text-transparent">
                打磨极致的视觉与交互。
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              这里是我的个人数字工坊。用来陈列具有游戏般打磨质感的前端实验性作品，记录代码踩坑日常，并映射我在前端世界里的“打怪升级”路线。
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
              <span className="relative z-10">▶ ENTER LAB</span>

              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="/notes"
              className="group rounded-md border border-[var(--panel-border)] bg-[var(--panel)]/40 px-6 py-3 font-mono text-sm font-bold tracking-wider text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] active:scale-95"
            >
              📂 OPEN ARCHIVE
            </Link>
          </div>
        </div>

        {/* 右侧：沉浸式游戏面板 Game Status Panel */}
        <aside className="rounded-lg border border-[var(--panel-border)] bg-[var(--panel)]/60 p-6 shadow-xl dark:shadow-black/40 font-mono relative overflow-hidden group">
          {/* 背景极光装饰 */}
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--accent)]/10 blur-3xl transition-opacity group-hover:opacity-70" />

          {/* 面板头部 */}
          <div className="flex items-center justify-between border-b border-[var(--panel-border)] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-widest uppercase text-[var(--foreground)]">
                Player Profile
              </span>
            </div>
            <span className="px-2 py-0.5 text-[10px] bg-[var(--foreground)] text-[var(--background)] font-bold uppercase rounded-sm tracking-wider">
              ID: LPKShuai
            </span>
          </div>

          {/* 属性网格 */}
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <p className="text-[var(--foreground-dim)] uppercase font-bold tracking-wider">
                  Primary Class
                </p>
                <p className="font-bold text-[var(--accent)] text-sm">
                  Web Frontend Eng.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--foreground-dim)] uppercase font-bold tracking-wider">
                  Sub-Class
                </p>
                <p className="font-bold text-[var(--foreground)] text-sm">
                  Creative Developer
                </p>
              </div>
            </div>

            {/* EXP 经验条区域 */}
            <div className="space-y-2">
              <div className="text-xs uppercase flex justify-between font-bold text-[var(--foreground-dim)]">
                <span className="tracking-wider">
                  Quest: Mastering Three.js & Shader
                </span>
                <span className="text-[var(--accent)]">45%</span>
              </div>
              <div className="h-2 w-full bg-[var(--panel-border)] rounded-full overflow-hidden p-[1px]">
                <div className="h-full bg-gradient-to-r from-[var(--accent)] to-amber-400 rounded-full w-[45%] shadow-[0_0_10px_var(--accent)]" />
              </div>
            </div>

            {/* Equipped Skills / 核心技能插槽 */}
            <div className="space-y-2">
              <p className="text-[var(--foreground-dim)] text-xs uppercase font-bold tracking-wider">
                Equipped Skills
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

            {/* Current Buff 状态加成区 */}
            <div className="rounded-sm border-l-2 border-green-500 bg-green-500/5 dark:bg-green-500/10 p-3 text-xs leading-5 text-[var(--foreground-muted)]">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1 uppercase tracking-wider">
                ⚡ CURRENT BUFF: 像素共鸣 (Pixel Resonance)
              </span>
              专注度提升。当前正在深度打磨跨端组件库交互，并正在构思将 Canvas
              粒子效果注入 Lab 实验场。
            </div>
          </div>
        </aside>
      </div>

      {/* 底部：三格装备栏 / 路由入口 */}
      <div className="pt-8 border-t border-[var(--panel-border)]">
        <ul className="grid gap-4 md:grid-cols-3">
          {cardStack.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`group/card relative block h-full rounded-xl border bg-[var(--panel)] p-6 transition-all duration-300 hover:-translate-y-2 ${item.rarityClass} shadow-sm dark:shadow-none overflow-hidden`}
                >
                  {/* 背景光晕（核心升级点） */}
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100 bg-current" />

                  {/* icon / 标识区 */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-md bg-[var(--panel-elevated)] flex items-center justify-center text-sm">
                      {item.tag.split(" / ")[0] === "EPIC" && "⚡"}
                      {item.tag.split(" / ")[0] === "RARE" && "📘"}
                      {item.tag.split(" / ")[0] === "COMMON" && "👤"}
                    </div>

                    <span className="font-mono text-[10px] opacity-60">
                      {item.tag}
                    </span>
                  </div>

                  {/* 标题 */}
                  <span className="font-mono font-bold tracking-wide text-[var(--foreground)] block text-lg">
                    {item.label}
                  </span>

                  {/* 描述 */}
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)] transition-colors group-hover/card:text-[var(--foreground)]">
                    {item.desc}
                  </p>

                  {/* 底部提示线 */}
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-60" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
