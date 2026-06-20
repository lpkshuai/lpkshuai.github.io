import Link from "next/link";
import { getAllNotes } from "@/lib/notes";
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

export default async function NotesPage() {
  const notes = await getAllNotes();
  const categories = Array.from(new Set(notes.map((note) => note.category)));
  const publishedCount = notes.filter(
    (note) => note.status === "published",
  ).length;
  const draftCount = notes.filter((note) => note.status === "draft").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <header className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
            Field Notes
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Notes from real frontend work and learning.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/65">
            Practical frontend notes collected from debugging sessions,
            framework experiments, setup records, and small implementation
            details worth keeping.
          </p>
        </div>

        <aside className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium">Knowledge Base</p>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-md border border-white/10 bg-black/10 p-3">
              <dt className="text-foreground/45">Notes</dt>
              <dd className="mt-2 text-2xl font-semibold">{notes.length}</dd>
            </div>
            <div className="rounded-md border border-white/10 bg-black/10 p-3">
              <dt className="text-foreground/45">Live</dt>
              <dd className="mt-2 text-2xl font-semibold">
                {publishedCount}
              </dd>
            </div>
            <div className="rounded-md border border-white/10 bg-black/10 p-3">
              <dt className="text-foreground/45">Drafts</dt>
              <dd className="mt-2 text-2xl font-semibold">{draftCount}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
              Categories
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/60"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </header>

      <section className="mt-12" aria-labelledby="notes-list-title">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 id="notes-list-title" className="text-2xl font-semibold">
              Latest Notes
            </h2>
            <p className="mt-2 text-sm text-foreground/55">
              Selected notes will gradually be migrated from my older blog and
              refined here.
            </p>
          </div>
        </div>

        <ul className="grid gap-4">
          {notes.map((note) => (
            <li key={note.slug}>
              <article className="h-full">
                <Link
                  href={`/notes/${note.slug}`}
                  className="block h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[var(--accent)]/10 px-2.5 py-1 text-xs text-[var(--accent)]">
                          {note.category}
                        </span>
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground/55">
                          {typeLabel[note.type]}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold">
                        {note.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/60">
                        {note.description}
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-foreground/60">
                      {statusLabel[note.status]}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-foreground/45">
                    <time dateTime={note.updatedAt}>{note.updatedAt}</time>
                    <span>{note.readingTime}</span>
                    {note.source ? <span>Source: {note.source.label}</span> : null}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] px-2 py-1 text-xs text-foreground/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
