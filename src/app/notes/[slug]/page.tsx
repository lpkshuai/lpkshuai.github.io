import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/notes/MarkdownContent";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import type { NoteStatus, NoteType } from "@/types/note";

const statusLabel: Record<NoteStatus, string> = {
  published: "Published",
  learning: "Learning",
  draft: "Draft",
};

const typeLabel: Record<NoteType, string> = {
  concept: "Concept",
  debugging: "Debugging",
  setup: "Setup",
  snippet: "Snippet",
  review: "Review",
};

export const dynamicParams = false;

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 font-mono selection:bg-[var(--accent)]/30">
      {/* 返回按钮 - 终端风格 */}
      <Link
        href="/notes/archive"
        className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--foreground-dim)] transition-colors hover:text-[var(--accent)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ◄
        </span>
        RETURN_TO_ARCHIVE / 返回图鉴
      </Link>

      <header className="mt-8 border-b border-dashed border-[var(--panel-border)] pb-10">
        {/* 标签区域 - 统一为方形边框 */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="border border-[var(--accent)]/30 bg-[var(--accent-bg)] px-2 py-0.5 font-bold uppercase tracking-widest text-[var(--accent)] shadow-sm">
            {note.category}
          </span>
          <span className="text-[var(--foreground-dim)]">
            // {typeLabel[note.type]}
          </span>
          <span className="flex shrink-0 items-center gap-1.5 border border-[var(--panel-border)] px-2 py-0.5 uppercase tracking-wider text-[var(--foreground-muted)]">
            {note.status === "published" && (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
            )}
            {statusLabel[note.status]}
          </span>
        </div>

        {/* 标题与描述 */}
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--foreground)] md:text-5xl">
          {note.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--foreground-muted)]">
          {note.description}
        </p>

        {/* 元数据 - 系统日志样式 */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-[var(--foreground-dim)]">
          <time dateTime={note.updatedAt}>UPDATED: {note.updatedAt}</time>
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
              className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]"
            >
              SRC: {note.source.label} ↗
            </a>
          ) : null}
        </div>

        {/* Tags - 带有 # 前缀的终端样式 */}
        <div className="mt-5 flex flex-wrap gap-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent-strong)]"
            >
              <span className="mr-0.5 opacity-50">#</span>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="mt-10">
        <MarkdownContent content={note.content} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const notes = await getAllNotes();

  return notes.map((note) => ({ slug: note.slug }));
}
