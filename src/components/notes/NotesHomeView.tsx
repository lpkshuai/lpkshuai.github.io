"use client";

import Link from "next/link";
import NoteCard from "@/components/notes/NoteCard";
import { useDictionary } from "@/hooks/useDictionary";
import type { Note } from "@/types/note";

interface Props {
  notes: Note[];
  categories: string[];
  featuredNote?: Note;
  recentNotes: Note[];
  publishedCount: number;
  draftCount: number;
}

export default function NotesHomeView({
  notes,
  categories,
  featuredNote,
  recentNotes,
  publishedCount,
  draftCount,
}: Props) {
  const { notes: t } = useDictionary();

  return (
    <>
      {/* 模块一：次世代游戏库控制台 */}
      <header className="mb-16 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-2 border-dashed border-(--panel-border) pb-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--accent)">
              <span className="h-2 w-2 bg-(--accent) shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
              {t.home.badge}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-(--foreground) leading-tight">
              {t.home.titlePre}{" "}
              <span className="font-serif italic tracking-wide bg-linear-to-r from-(--accent) to-amber-500 bg-clip-text text-transparent">
                {t.home.titleHighlight}
              </span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-(--foreground-muted)">
              {t.home.desc}
            </p>
          </div>

          {/* 状态栏 */}
          <div className="flex gap-6 rounded-xl border border-(--panel-border) bg-(--panel) p-5 shadow-lg">
            <div className="flex flex-col justify-end text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-(--foreground-dim) mb-1">
                {t.home.totalLogs}
              </span>
              <span className="text-3xl font-black text-(--foreground) leading-none">
                {notes.length}
              </span>
            </div>
            <div className="w-px bg-(--panel-border)"></div>
            <div className="flex flex-col justify-end text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-(--accent) mb-1">
                {t.home.deployed}
              </span>
              <span className="text-3xl font-black text-(--accent) leading-none">
                {publishedCount}
              </span>
            </div>
            <div className="w-px bg-(--panel-border)"></div>
            <div className="flex flex-col justify-end text-right opacity-60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-(--foreground-dim) mb-1">
                {t.home.drafts}
              </span>
              <span className="text-xl font-bold text-(--foreground) leading-none">
                {draftCount}
              </span>
            </div>
          </div>
        </div>

        {/* 标签过滤器 */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-(--foreground-dim) mr-2">
            {t.home.filterBy}
          </span>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/notes/archive?category=${encodeURIComponent(category)}`}
              className="group relative overflow-hidden rounded border border-(--panel-border) bg-(--panel) px-3 py-1.5 text-xs font-bold text-(--foreground-muted) transition-all hover:border-(--accent) hover:text-(--accent) shadow-sm"
            >
              <span className="relative z-10">{category}</span>
              <div className="absolute inset-0 bg-(--accent)/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
            </Link>
          ))}
        </div>
      </header>

      {/* 模块二：最新破译 */}
      {featuredNote && (
        <section aria-labelledby="featured-note-title" className="mb-12">
          <h2
            id="featured-note-title"
            className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-(--accent-strong)"
          >
            <span className="animate-pulse">✦</span> {t.home.latestTitle}
          </h2>
          <div className="group relative rounded-2xl border-2 border-(--accent-strong)/30 bg-(--panel) p-2 transition-all hover:border-(--accent-strong) hover:shadow-[0_0_30px_var(--accent-strong)]/20">
            <div className="absolute -right-3 -top-3 rotate-12 rounded-lg border-2 border-(--accent-strong) bg-(--background) px-3 py-1 text-xs font-black text-(--accent-strong) shadow-lg">
              {t.home.newBadge}
            </div>
            <div className="rounded-xl bg-(--background)">
              <NoteCard note={featuredNote} featured />
            </div>
          </div>
        </section>
      )}

      {/* 模块三：最近解锁 */}
      <section aria-labelledby="recent-notes-title" className="mb-16">
        <h2
          id="recent-notes-title"
          className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-(--foreground-muted)"
        >
          {t.home.recentTitle}
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {recentNotes.map((note) => (
            <li key={note.slug} className="group h-full">
              <div className="h-full rounded-2xl border border-(--panel-border) bg-(--panel) p-1 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_8px_30px_-10px_var(--accent-bg)]">
                <div className="h-full rounded-xl bg-(--background)">
                  <NoteCard note={note} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 模块四：查看全部 */}
      <section className="mt-8 border-t border-dashed border-(--panel-border) pt-12">
        <Link
          href="/notes/archive"
          className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-(--panel-border) bg-(--panel) py-12 transition-all hover:border-(--accent) hover:shadow-[0_0_40px_var(--accent-bg)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--background) border border-(--accent) text-(--accent) shadow-[0_0_15px_var(--accent-bg)] transition-transform group-hover:scale-110">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <h3 className="text-xl font-bold text-(--foreground) group-hover:text-(--accent) transition-colors">
              {t.home.ctaTitle}
            </h3>
            <p className="text-xs font-sans text-(--foreground-muted)">
              {t.home.ctaDesc}
            </p>
          </div>
        </Link>
      </section>
    </>
  );
}
