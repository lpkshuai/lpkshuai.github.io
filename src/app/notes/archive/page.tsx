import { getAllNotes } from "@/lib/notes";
import NotesArchiveView from "@/components/notes/NotesArchiveView";

export default async function ArchivePage() {
  const notes = await getAllNotes();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 font-mono selection:bg-[var(--accent)]/30">
      <NotesArchiveView notes={notes} />
    </main>
  );
}
