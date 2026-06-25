"use client";

import { useDictionary } from "@/hooks/useDictionary";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ 引入获取语言的 hook
import LabHeader from "./LabHeader";
import LabCard from "./LabCard";
import type { LabCategory } from "@/types/lab";

interface LabHomeViewProps {
  categories: LabCategory[];
}

export default function LabHomeView({ categories }: LabHomeViewProps) {
  const { lab } = useDictionary();
  const { gallery } = lab;
  const { language } = useLanguage(); // ✅ 获取当前语言 'zh' | 'en'

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 font-mono text-(--foreground) selection:bg-(--accent)/30">
      <LabHeader />

      <div className="space-y-24">
        {categories.map((category) => {
          // ✅ 根据当前语言，直接从数据中取对应的标题和描述
          const displayTitle = category.title[language];
          const displayDesc = category.description[language];

          return (
            <div key={category.id} className="space-y-8">
              <div className="flex items-end justify-between border-b border-(--panel-border) pb-4">
                <div className="space-y-1">
                  <h2 className="flex items-center gap-2 text-2xl font-bold uppercase tracking-widest text-(--foreground)">
                    <span className="text-(--accent)">{category.icon}</span>{" "}
                    {displayTitle}
                  </h2>
                  <p className="font-sans text-xs text-(--foreground-muted)">
                    {displayDesc}
                  </p>
                </div>
                <div className="hidden text-xs text-(--foreground-dim) md:block">
                  [{category.experiments.length} {gallery.relicsUnlocked}]
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.experiments.map((experiment) => (
                  <LabCard
                    key={experiment.id}
                    experiment={experiment}
                    categoryTitle={displayTitle}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 空状态处理 */}
      {categories.length === 0 && (
        <div className="rounded-lg border border-dashed border-(--panel-border) bg-(--panel)/40 p-8 text-center">
          <p className="font-mono text-sm text-(--foreground-muted)">
            &gt; ERROR: NO_DATA_FOUND. <br />
            <span className="text-(--foreground-dim)">
              {gallery.noExperiments}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}
