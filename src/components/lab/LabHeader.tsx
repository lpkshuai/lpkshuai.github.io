"use client";

import { useDictionary } from "@/hooks/useDictionary";

export default function LabHeader() {
  const { lab } = useDictionary();
  const { gallery } = lab;

  return (
    <header className="mb-16 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-2 border-dashed border-(--panel-border) pb-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--accent)">
            <span className="h-2 w-2 bg-(--accent) shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
            {gallery.badge}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-(--foreground) leading-tight">
            {gallery.titlePre}{" "}
            <span className="font-serif italic tracking-wide bg-linear-to-r from-(--accent) to-amber-500 bg-clip-text text-transparent">
              {gallery.titleHighlight}
            </span>
          </h1>
          <p className="max-w-xl text-base leading-8 text-(--foreground-muted)">
            {gallery.desc}
          </p>
        </div>
      </div>
    </header>
  );
}
