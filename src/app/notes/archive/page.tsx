import { getAllNotes } from "@/lib/notes";
import NotesArchiveView from "@/components/notes/NotesArchiveView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "笔记归档",
  description: "按主题浏览全部前端开发笔记与实践记录。",
  alternates: { canonical: "/notes/archive" },
};

export default async function ArchivePage() {
  const notes = await getAllNotes();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 font-mono selection:bg-(--accent)/30">
      <NotesArchiveView notes={notes} />
    </main>
  );
}
