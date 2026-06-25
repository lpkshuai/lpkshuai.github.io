import Link from "next/link";

// 模拟详情页数据，对接 Gallery 的数据结构
const artifact = {
  id: "css-01",
  category: "CSS Illusion",
  title: "Glitch Matrix",
  desc: "利用伪元素与关键帧动画实现的赛博朋克故障文字破坏效果。在不引入外部重度脚本的情况下，实现纯粹的底层视觉撕裂感。",
  tags: ["CSS3", "Keyframes", "Mix-blend"],
  date: "2026.06.25",
  repo: "https://github.com/lpkshuai/...", // 源码链接
  
  // 沿用首页的 EXP Bar 游戏概念
  stats: [
    { label: "视觉表现 // Visual Impact", percent: "95%", color: "bg-(--accent)" },
    { label: "性能消耗 // Performance Cost", percent: "15%", color: "bg-amber-500" },
    { label: "代码体积 // Bundle Size", percent: "5%", color: "bg-(--accent-strong)" },
  ],
  
  logs: [
    {
      title: "01 / 构想与世界观",
      content: "故障艺术（Glitch Art）的核心在于破坏秩序。我们通过在暗色背景下叠加高饱和度的青色（Cyan）与洋红（Magenta）双重残影，模拟出系统底层代码溢出、硬件断层带来的视觉阵痛。"
    },
    {
      title: "02 / 核心解法 (Core Technics)",
      content: "不依赖任何 JS 定时器，完全基于 CSS animation 与 `clip-path` 裁剪属性。通过关键帧在 0% 到 100% 间进行高频且无规律的区域切片移位，迫使浏览器在极短时间内完成图层重绘，从而制造出“不稳定”的高级视觉假象。"
    }
  ]
};

export default function LabDetailPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 font-mono text-(--foreground) selection:bg-(--accent)/30">
      
      {/* 顶部面包屑：统一的主机游戏导航风格 */}
      <nav className="mb-8 flex items-center justify-between text-xs font-bold text-(--foreground-muted) uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <Link href="/lab" className="hover:text-(--accent) transition-colors flex items-center gap-1">
            <span>←</span> ARTIFACT_GALLERY
          </Link>
          <span className="text-(--panel-border)">/</span>
          <span>{artifact.category}</span>
          <span className="text-(--panel-border)">/</span>
          <span className="text-(--foreground)">{artifact.id}</span>
        </div>
        <div className="hidden sm:block">
          [ DECRYPTED_AND_READY ]
        </div>
      </nav>

      {/* 核心演示舞台 (The Stage) - 沿用 Gallery 的画框嵌套效应 */}
      <div className="mb-12 rounded-3xl border border-(--panel-border) bg-(--panel) p-1.5 shadow-2xl">
        <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-(--background) border border-(--panel-border)">
          
          {/* 这里是展示特效演示的真实区域 */}
          <div className="z-10 text-center space-y-4">
             <h2 className="text-5xl font-black uppercase tracking-[0.2em] text-(--foreground) animate-pulse">
               GLITCH_MATRIX
             </h2>
             <p className="font-sans text-sm text-(--foreground-muted)">[ 实机演示视口 / Live Demo Container ]</p>
          </div>

          {/* 舞台背景：网格线与微弱扫描线，保证极客感 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
          
          {/* 左上角状态指示灯 */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-(--panel-border) bg-(--panel)/50 px-3 py-1 text-[10px] font-bold text-(--accent) backdrop-blur-md">
            <span className="size-2 animate-ping rounded-full bg-(--accent)" />
            LIVE_SIMULATION
          </div>
        </div>
      </div>

      {/* 内容网格：完美融入 Bento Box 风格 */}
      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        
        {/* 左侧：情报与研发日志 */}
        <div className="space-y-12">
          
          {/* 标题与描述 */}
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              {artifact.title}
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-(--foreground-muted) border-l-2 border-(--accent) pl-4">
              {artifact.desc}
            </p>
          </div>

          {/* 研发日志卷轴 */}
          <div className="space-y-8 border-t border-dashed border-(--panel-border) pt-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-(--foreground)">
               <span className="text-(--accent)">◈</span> FORGING_LOGS // 研发记录
            </div>
            
            <div className="space-y-8">
              {artifact.logs.map((log, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-sm font-bold text-(--foreground)">{log.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-(--foreground-muted)">
                    {log.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：Bento 侧边栏面板 */}
        <div className="space-y-6">
          
          {/* 面板 1：圣物属性 (完美复用首页的 EXP Bar 设计) */}
          <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-6">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-(--foreground-dim)">
              [ Artifact_Stats ]
            </h3>
            <div className="space-y-5">
              {artifact.stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-(--foreground-muted)">
                    <span>{stat.label}</span>
                    <span className="font-mono text-(--foreground)">{stat.percent}</span>
                  </div>
                  {/* EXP 进度条 */}
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-(--background) border border-(--panel-border)">
                    <div 
                      className={`h-full ${stat.color} transition-all duration-1000`} 
                      style={{ width: stat.percent }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 面板 2：合成配方 (技术标签) */}
          <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-(--foreground-dim)">
              [ Forged_With ]
            </h3>
            <div className="flex flex-wrap gap-2">
              {artifact.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded bg-(--background) border border-(--panel-border) px-2.5 py-1 text-[10px] font-bold uppercase text-(--foreground-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 面板 3：操作入口 */}
          <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-6">
            <div className="space-y-3">
              <Link 
                href={artifact.repo}
                target="_blank"
                className="group flex w-full items-center justify-between rounded-xl border border-(--panel-border) bg-(--background) px-4 py-3 transition-all hover:border-(--accent) hover:bg-(--accent)/5"
              >
                <span className="text-xs font-bold uppercase text-(--foreground) transition-colors group-hover:text-(--accent)">
                  VIEW_SOURCE_CODE
                </span>
                <span className="text-(--foreground-dim) transition-transform group-hover:translate-x-1 group-hover:text-(--accent)">
                  →
                </span>
              </Link>
              <div className="text-center font-sans text-[10px] text-(--foreground-dim)">
                Forged Date: {artifact.date}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}