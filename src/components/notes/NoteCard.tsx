import Link from "next/link";
import { statusLabel, typeLabel } from "@/lib/note-labels";
import type { Note } from "@/types/note";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/notes/${note.slug}`}
        className="block h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06] active:scale-98"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[var(--accent-bg)] px-2.5 py-1 text-xs text-[var(--accent)]">
                {note.category}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground-muted">
                {typeLabel[note.type]}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold">{note.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground-muted">
              {note.description}
            </p>
          </div>

          <span className="w-fit shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground-muted">
            {statusLabel[note.status]}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-foreground-dim">
          <time dateTime={note.updatedAt}>{note.updatedAt}</time>
          <span>{note.readingTime}</span>
          {note.source ? <span>Source: {note.source.label}</span> : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.04] px-2 py-1 text-xs text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
