"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useDictionary } from "@/hooks/useDictionary";
import { useLanguage } from "@/contexts/LanguageContext";
import { labCategories } from "@/content/lab/experiments";
import type { LabExperiment, LabCategory } from "@/types/lab";

// ============================================================
// 1. 组件映射表
// ============================================================
// 仅针对 renderType 为 'component' 的本地 React 组件
// 使用 dynamic import 实现懒加载，优化首屏速度
const componentsMap: Record<string, React.ComponentType> = {
  "glitch-matrix": dynamic(
    () => import("@/components/experiments/GlitchMatrix"),
  ),
  "glassmorphism-card": dynamic(
    () => import("@/components/experiments/GlassmorphismCard"),
  ),
  "neon-pulse": dynamic(() => import("@/components/experiments/NeonPulse")),
  // 在此处继续添加其他 React 组件...
};

// ============================================================
// 2. Props 定义
// ============================================================
interface Props {
  id: string;
}

// ============================================================
// 3. 主组件
// ============================================================
export default function LabDetailView({ id }: Props) {
  const { lab: t } = useDictionary();
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  // --------------------------------------------------------
  // A. 数据查找逻辑
  // --------------------------------------------------------
  let experiment: LabExperiment | undefined;
  let category: LabCategory | undefined;

  for (const cat of labCategories) {
    const found = cat.experiments.find((exp) => exp.id === id);
    if (found) {
      experiment = found;
      category = cat;
      break;
    }
  }

  if (!experiment || !category) {
    return (
      <div className="p-10 text-center text-red-500 font-mono border border-red-500/30 bg-red-500/10 rounded-xl mx-auto max-w-6xl my-20">
        ERROR: ARTIFACT_NOT_FOUND <br />
        <span className="text-xs text-(--foreground-dim)">ID: {id}</span>
      </div>
    );
  }

  // --------------------------------------------------------
  // B. 数据处理
  // --------------------------------------------------------
  const displayCategoryTitle = category.title[language];

  const handleCopy = () => {
    if (!experiment.codeSnippet) return;
    navigator.clipboard.writeText(experiment.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --------------------------------------------------------
  // C. 核心渲染策略
  // --------------------------------------------------------
  const renderExperimentContent = () => {
    const type = experiment.renderType || "component";

    switch (type) {
      // 场景 B: Iframe 嵌入 (Vue/旧项目/静态Demo)
      case "iframe":
        return (
          <iframe
            src={experiment.embedUrl}
            title={experiment.title}
            className="w-full h-full border-0 bg-(--background)"
            // 安全沙箱：允许脚本运行，但禁止弹出窗口等潜在风险
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
          />
        );

      // 场景 C: 媒体预览 (外部链接/视频/GIF)
      case "media":
        if (!experiment.previewMedia)
          return <PreviewPlaceholder title={experiment.title} />;

        // 视频预览
        if (experiment.previewMedia.type === "video") {
          return (
            <video
              className="w-full h-full object-cover"
              src={experiment.previewMedia.src}
              poster={experiment.previewMedia.poster}
              autoPlay
              loop
              muted
              playsInline
            />
          );
        }

        // 图片/GIF 预览
        return (
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={experiment.previewMedia.src}
              alt={experiment.title}
              className="w-full h-full object-cover"
            />
          </div>
        );

      // 场景 A: React 组件
      case "component":
      default:
        const Component = componentsMap[id];
        return Component ? (
          <Component />
        ) : (
          <PreviewPlaceholder title={experiment.title} />
        );
    }
  };

  // 根据类型决定状态栏文案
  const getStatusText = () => {
    if (experiment.renderType === "media") return "EXTERNAL_LINK";
    if (experiment.renderType === "iframe") return "EMBED_RUNNING";
    return t.detail.live;
  };

  // --------------------------------------------------------
  // D. 渲染 UI
  // --------------------------------------------------------
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 font-mono text-(--foreground) selection:bg-(--accent)/30">
      {/* 1. 顶部导航栏 */}
      <nav className="mb-10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-(--foreground-muted)">
        <Link
          href="/lab"
          className="group flex items-center gap-2 transition-colors hover:text-(--accent)"
        >
          <span className="flex size-6 items-center justify-center rounded-full border border-(--panel-border) bg-(--panel) transition-colors group-hover:border-(--accent)">
            ←
          </span>
          {t.detail.back}
        </Link>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="size-2 animate-pulse rounded-full bg-green-500" />
          <span>{t.detail.status}</span>
        </div>
      </nav>

      {/* 2. 标题区域 */}
      <header className="mb-10">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-(--accent)">
          // {displayCategoryTitle}
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
          {experiment.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-(--foreground-muted)">
          {experiment.description}
        </p>
      </header>

      {/* 3. 预览区域 */}
      <div className="mb-12 rounded-3xl border border-(--panel-border) bg-(--panel) p-1.5 shadow-2xl">
        <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-(--background) border border-(--panel-border)">
          {/* 渲染策略执行 */}
          {renderExperimentContent()}

          {/* 背景网格特效 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* 状态悬浮窗 */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-(--foreground)/10 bg-(--foreground)/80 px-3 py-1 text-[10px] font-bold text-(--background) backdrop-blur-sm shadow-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
            {getStatusText()}
          </div>
        </div>
      </div>

      {/* 4. 核心信息网格 */}
      <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
        {/* 左侧：代码区域 */}
        <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-1.5 lg:col-span-2">
          <div className="rounded-xl border border-(--panel-border) bg-(--background) overflow-hidden">
            {/* 代码块头部 */}
            <div className="flex items-center justify-between border-b border-(--panel-border) bg-(--panel)/30 px-4 py-2">
              <div className="flex items-center gap-2 text-(--accent)">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {t.detail.coreCode}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="text-[10px] text-(--foreground-dim) hover:text-(--accent) transition-colors flex items-center gap-1"
              >
                {copied ? t.detail.copied : t.detail.copyCode}
              </button>
            </div>

            {/* 代码内容 */}
            <div className="p-4 overflow-x-auto text-xs leading-loose md:p-6 md:text-sm">
              <pre className="text-(--foreground-muted) whitespace-pre-wrap">
                <code>
                  {experiment.codeSnippet || "// No core spell extracted..."}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* 右侧：Bento 侧边栏 */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* 技术标签 */}
          <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-6">
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--foreground-dim)">
              <span className="text-(--accent)">◈</span> {t.detail.forgedWith}
            </h3>
            <div className="flex flex-wrap gap-2">
              {experiment.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-(--background) border border-(--panel-border) px-2.5 py-1 text-[10px] font-bold uppercase text-(--foreground-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 跳转链接 */}
          <div className="rounded-2xl border border-(--panel-border) bg-(--panel) p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-(--foreground-dim)">
              [ {t.detail.accessTerminal} ]
            </h3>
            <p className="mb-6 font-sans text-xs text-(--foreground-muted) leading-relaxed">
              {t.detail.sourceDesc}
            </p>

            <div className="flex flex-col gap-3">
              {/* 在线演示按钮 */}
              {experiment.demoUrl && (
                <Link
                  href={experiment.demoUrl}
                  target="_blank"
                  className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-(--accent-strong) bg-(--accent-strong)/10 px-4 py-3 transition-all hover:bg-(--accent-strong) hover:shadow-[0_0_20px_var(--accent-bg)]"
                >
                  <span className="relative z-10 text-xs font-bold uppercase text-(--accent-strong) transition-colors group-hover:text-(--background)">
                    {t.detail.viewDemo}
                  </span>
                  <span className="relative z-10 text-(--accent-strong) transition-transform group-hover:translate-x-1 group-hover:text-(--background)">
                    ↗
                  </span>
                </Link>
              )}

              {/* 源码按钮 */}
              {experiment.sourceUrl && (
                <Link
                  href={experiment.sourceUrl}
                  target="_blank"
                  className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-(--accent) bg-(--accent-bg) px-4 py-3 transition-all hover:bg-(--accent) hover:shadow-[0_0_20px_var(--accent-bg)]"
                >
                  <span className="relative z-10 text-xs font-bold uppercase text-(--accent) transition-colors group-hover:text-(--background)">
                    {t.detail.viewSource}
                  </span>
                  <span className="relative z-10 text-(--accent) transition-transform group-hover:translate-x-1 group-hover:text-(--background)">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 占位符组件
function PreviewPlaceholder({ title }: { title?: string }) {
  return (
    <div className="z-10 text-center p-8">
      <h2 className="text-4xl font-black uppercase tracking-[0.2em] text-(--foreground) animate-pulse">
        {title?.replace(/ /g, "_") || "DEMO"}
      </h2>
      <p className="mt-4 text-xs text-(--foreground-dim)">
        [ DEMO_PLACEHOLDER ]
      </p>
    </div>
  );
}
