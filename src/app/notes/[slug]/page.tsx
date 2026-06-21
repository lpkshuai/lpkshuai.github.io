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
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/notes"
        className="text-sm text-foreground-muted transition hover:text-foreground"
      >
        Back to Notes
      </Link>

      <header className="mt-10 border-b border-white/10 pb-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[var(--accent-bg)] px-2.5 py-1 text-xs text-[var(--accent)]">
            {note.category}
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground-muted">
            {typeLabel[note.type]}
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground-muted">
            {statusLabel[note.status]}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight">
          {note.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground-muted">
          {note.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-foreground-dim">
          <time dateTime={note.updatedAt}>Updated {note.updatedAt}</time>
          <span>{note.readingTime}</span>
          {note.source ? (
            <a
              href={note.source.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              Source: {note.source.label}
            </a>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.04] px-2 py-1 text-xs text-foreground-muted"
            >
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
