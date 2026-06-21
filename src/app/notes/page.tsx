import Link from "next/link";
import NoteCard from "@/components/notes/NoteCard";
import { getAllNotes } from "@/lib/notes";

export default async function NotesPage() {
  const notes = await getAllNotes();
  const categories = Array.from(new Set(notes.map((note) => note.category)));
  const latestNotes = notes.slice(0, 5);
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
              <dt className="text-foreground-dim">Notes</dt>
              <dd className="mt-2 text-2xl font-semibold">{notes.length}</dd>
            </div>
            <div className="rounded-md border border-white/10 bg-black/10 p-3">
              <dt className="text-foreground-dim">Live</dt>
              <dd className="mt-2 text-2xl font-semibold">
                {publishedCount}
              </dd>
            </div>
            <div className="rounded-md border border-white/10 bg-black/10 p-3">
              <dt className="text-foreground-dim">Drafts</dt>
              <dd className="mt-2 text-2xl font-semibold">{draftCount}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-dim">
              Browse by category
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/notes/archive?category=${encodeURIComponent(category)}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/60 transition hover:border-cyan-300/40 hover:text-foreground"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </header>

      <section className="mt-12" aria-labelledby="recent-notes-title">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="recent-notes-title" className="text-2xl font-semibold">
              Recently Updated
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              A short preview of the newest notes. The full archive includes
              search and filters.
            </p>
          </div>

          <Link
            href="/notes/archive"
            className="w-fit rounded-md border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            View all notes
          </Link>
        </div>

        <ul className="grid gap-4">
          {latestNotes.map((note) => (
            <li key={note.slug}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
