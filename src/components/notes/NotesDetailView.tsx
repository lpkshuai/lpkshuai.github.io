"use client";

import Link from "next/link";
import MarkdownContent from "@/components/notes/MarkdownContent";
import { useDictionary } from "@/hooks/useDictionary";
import { useNoteLabels } from "@/hooks/useNoteLabels";
// 修改这里：导入 NoteWithContent 而不是 Note
import type { NoteWithContent } from "@/types/note";

// 修改这里：将 note 的类型改为 NoteWithContent
export default function NotesDetailView({ note }: { note: NoteWithContent }) {
  const { notes: t } = useDictionary();
  const { statusLabel, typeLabel } = useNoteLabels();

  return (
    <>
      {/* 返回按钮 */}
      <Link
        href="/notes/archive"
        className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-(--foreground-dim) transition-colors hover:text-(--accent)"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ◄
        </span>
        {t.detail.backBtn}
      </Link>

      <header className="mt-8 border-b border-dashed border-(--panel-border) pb-10">
        {/* 标签区域 */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="border border-(--accent)/30 bg-(--accent-bg) px-2 py-0.5 font-bold uppercase tracking-widest text-(--accent) shadow-sm">
            {note.category}
          </span>
          <span className="text-(--foreground-dim)">
            // {typeLabel[note.type]}
          </span>
          <span className="flex shrink-0 items-center gap-1.5 border border-(--panel-border) px-2 py-0.5 uppercase tracking-wider text-(--foreground-muted)">
            {note.status === "published" && (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--accent)" />
            )}
            {statusLabel[note.status]}
          </span>
        </div>

        {/* 标题与描述 */}
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-(--foreground) md:text-5xl">
          {note.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-(--foreground-muted)">
          {note.description}
        </p>

        {/* 元数据 */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-(--foreground-dim)">
          <time dateTime={note.updatedAt}>
            {t.detail.updatedAt}: {note.updatedAt}
          </time>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {note.readingTime}
          </span>
          {note.source ? (
            <a
              href={note.source.url}
              target="_blank"
              rel="noreferrer"
              className="text-(--foreground-muted) transition-colors hover:text-(--accent)"
            >
              {t.detail.source}: {note.source.label} ↗
            </a>
          ) : null}
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-(--foreground-muted) transition-colors hover:text-(--accent-strong)"
            >
              <span className="mr-0.5 opacity-50">#</span>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="mt-10">
        {/* 这里用到了 note.content */}
        <MarkdownContent content={note.content} />
      </article>
    </>
  );
}
