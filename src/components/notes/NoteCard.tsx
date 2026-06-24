"use client";

import Link from "next/link";
import type { Note } from "@/types/note";

import { useDictionary } from "@/hooks/useDictionary";

type NoteCardProps = {
  note: Note;
  featured?: boolean;
};

export default function NoteCard({ note, featured = false }: NoteCardProps) {
  const dict = useDictionary();
  const type = dict.notes.type;
  const status = dict.notes.status;

  return (
    <article className="group flex h-full flex-col">
      {/* 外层的 border 和 hover 发光效果已经在 page.tsx 的 <li> 中处理了
        这里只负责内部的间距、排版和微交互
      */}
      <Link
        href={`/notes/${note.slug}`}
        className="flex h-full flex-col p-5 md:p-6"
      >
        {/* 头部：分类、类型与状态 */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-[var(--accent)]/30 bg-[var(--accent-bg)] px-2 py-0.5 font-bold uppercase tracking-widest text-[var(--accent)] shadow-sm">
              {note.category}
            </span>
            <span className="text-[var(--foreground-dim)]">
              // {type[note.type]}
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 border border-[var(--panel-border)] px-2 py-0.5 uppercase tracking-wider text-[var(--foreground-muted)]">
            {note.status === "published" && (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
            )}
            {status[note.status]}
          </span>
        </div>

        {/* 主体：标题与描述 */}
        <div className="flex-grow">
          {/* 根据 featured 放大标题 */}
          <h3
            className={`line-clamp-2 font-bold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}
          >
            {note.title}
          </h3>

          {/* 如果是 featured，可以多显示几行描述 */}
          <p
            className={`mt-3 font-sans text-sm leading-relaxed text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--foreground)] ${featured ? "line-clamp-4" : "line-clamp-3"}`}
          >
            {note.description}
          </p>
        </div>

        {/* 底部：元数据与标签 */}
        <div className="mt-6 flex flex-col gap-3 border-t border-dashed border-[var(--panel-border)] pt-4">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-[var(--foreground-dim)]">
            <time dateTime={note.updatedAt}>{note.updatedAt}</time>
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
            {note.source && <span>SRC: {note.source.label}</span>}
          </div>

          <div className="mt-1 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-[var(--foreground-muted)] transition-colors before:mr-0.5 before:opacity-50 before:content-['#'] group-hover:text-[var(--accent-strong)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
