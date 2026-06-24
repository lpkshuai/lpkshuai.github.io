"use client";

import NotesArchive from "@/components/notes/NotesArchive";
import { useDictionary } from "@/hooks/useDictionary";
import type { Note } from "@/types/note";

export default function NotesArchiveView({ notes }: { notes: Note[] }) {
  const { notes: t } = useDictionary();

  return (
    <>
      <header className="mb-12 space-y-5 border-b border-dashed border-(--panel-border) pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--accent)">
          <span className="h-2 w-2 bg-(--accent) shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
          {t.archive.badge}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-(--foreground) leading-tight">
          {t.archive.titlePre}{" "}
          <span className="font-serif italic tracking-wide bg-linear-to-r from-(--accent) to-amber-500 bg-clip-text text-transparent">
            {t.archive.titleHighlight}
          </span>
        </h1>
        <p className="max-w-2xl text-base leading-8 text-(--foreground-muted)">
          {t.archive.desc}
        </p>
      </header>

      {/* 原有的 NotesArchive 组件保持不动，负责筛选和展示列表 */}
      <NotesArchive notes={notes} />
    </>
  );
}
