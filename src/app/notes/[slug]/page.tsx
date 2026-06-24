import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import NotesDetailView from "@/components/notes/NotesDetailView";

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
    <main className="mx-auto max-w-3xl px-6 py-20 font-mono selection:bg-(--accent)/30">
      <NotesDetailView note={note} />
    </main>
  );
}

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}
