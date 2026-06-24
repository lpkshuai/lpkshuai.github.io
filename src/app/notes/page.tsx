import { getAllNotes } from "@/lib/notes";
import NotesHomeView from "@/components/notes/NotesHomeView";

export default async function NotesPage() {
  const notes = await getAllNotes();
  const categories = Array.from(new Set(notes.map((note) => note.category)));

  const featuredNote = notes[0];
  const recentNotes = notes.slice(1, 5);
  const publishedCount = notes.filter(
    (note) => note.status === "published",
  ).length;
  const draftCount = notes.filter((note) => note.status === "draft").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 font-mono selection:bg-(--accent)/30">
      <NotesHomeView
        notes={notes}
        categories={categories}
        featuredNote={featuredNote}
        recentNotes={recentNotes}
        publishedCount={publishedCount}
        draftCount={draftCount}
      />
    </main>
  );
}
