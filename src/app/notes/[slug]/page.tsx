import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/content/notes/notes";

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 space-y-8">
      <Link href="/notes" className="text-sm text-foreground/60">
        ← Back to Notes
      </Link>
      <header>
        <p className="text-sm text-foreground/50">{note.category}</p>
        <h1 className="mt-2 text-3xl font-bold">{note.title}</h1>
        <p className="mt-4 text-foreground/70">{note.description}</p>
      </header>
      <article className="prose prose-neutral">
        <p>Content coming soon...</p>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}
