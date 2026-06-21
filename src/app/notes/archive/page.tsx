import NotesArchive from "@/components/notes/NotesArchive";
import { getAllNotes } from "@/lib/notes";

export default async function ArchivePage() {
  const notes = await getAllNotes();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Field Notes
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          All Notes
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/65">
          Browse through the complete collection of frontend notes with search
          and filtering capabilities.
        </p>
      </header>

      <NotesArchive notes={notes} />
    </main>
  );
}
