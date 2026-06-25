"use client";

import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";
import type { LabExperiment } from "@/types/lab";

interface LabCardProps {
  experiment: LabExperiment;
  categoryTitle?: string;
}

export default function LabCard({ experiment, categoryTitle }: LabCardProps) {
  const { lab } = useDictionary();
  const { gallery } = lab;

  return (
    <Link
      href={`/lab/${experiment.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-(--panel-border) bg-(--panel) transition-all duration-300 hover:-translate-y-2 hover:border-(--accent) hover:shadow-[0_10px_30px_-10px_var(--accent)]"
    >
      {/* 16:9 封面图区域 */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-(--panel-border)">
        <div className="absolute inset-0 bg-(--background) transition-transform duration-500 group-hover:scale-105">
          {/* 这里在实际项目中替换为 <Image /> 组件 */}
          <img
            src={experiment.cover}
            alt={experiment.title}
            className="size-full object-cover opacity-80 mix-blend-luminosity transition-all duration-500 group-hover:opacity-100 group-hover:mix-blend-normal"
          />
        </div>
        {/* 悬浮扫描线特效 */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
      </div>

      {/* 卡片内容区 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-(--foreground) transition-colors group-hover:text-(--accent)">
          {experiment.title}
        </h3>
        <p className="mb-6 line-clamp-2 flex-1 font-sans text-xs leading-relaxed text-(--foreground-muted)">
          {experiment.description}
        </p>

        {/* 技术标签与入口 */}
        <div className="flex items-end justify-between border-t border-dashed border-(--panel-border) pt-4">
          <div className="flex flex-wrap gap-1.5">
            {experiment.tags.map((tag) => (
              <span
                key={tag}
                className="bg-(--background) border border-(--panel-border) px-1.5 py-0.5 text-[9px] uppercase text-(--foreground-dim)"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-bold text-(--accent) opacity-0 transition-opacity group-hover:opacity-100">
            {gallery.inspect} {gallery.arrow}
          </span>
        </div>
      </div>
    </Link>
  );
}
