import Link from "next/link";
import { notes } from "@/content/notes/notes";

export default function NotesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 space-y-16">
      {/* 页头 */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight">Notes</h1>
        <p className="mt-4 max-w-3xl text-lg text-foreground/70">
          My learning notes and technical articles.
        </p>
      </section>

      {/* 列表 */}
      <section>
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link
                href={`/notes/${note.slug}`}
                className="block rounded-lg border p-4 transition hover:border-foreground/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">{note.title}</h2>
                    <p className="mt-1 text-sm text-foreground/70">
                      {note.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs">
                    {note.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/50">
                  {note.category}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
