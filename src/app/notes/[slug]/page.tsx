import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import NotesDetailView from "@/components/notes/NotesDetailView";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) return {};

  const url = `/notes/${note.slug}`;
  const indexable = note.status === "published";

  return {
    title: note.title,
    description: note.description,
    keywords: note.tags,
    alternates: { canonical: url },
    robots: { index: indexable, follow: indexable },
    openGraph: {
      type: "article",
      url,
      title: note.title,
      description: note.description,
      publishedTime: note.updatedAt,
      modifiedTime: note.updatedAt,
      authors: [siteConfig.author.name],
      tags: note.tags,
    },
    twitter: {
      card: "summary",
      title: note.title,
      description: note.description,
    },
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.description,
    dateModified: note.updatedAt,
    mainEntityOfPage: absoluteUrl(`/notes/${note.slug}`),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    keywords: note.tags.join(", "),
    ...(note.source ? { isBasedOn: note.source.url } : {}),
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 font-mono selection:bg-(--accent)/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <NotesDetailView note={note} />
    </main>
  );
}

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}
