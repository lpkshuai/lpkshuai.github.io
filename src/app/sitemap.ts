import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getAllNotes();
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/notes"), changeFrequency: "weekly", priority: 0.9 },
    {
      url: absoluteUrl("/notes/archive"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: absoluteUrl("/lab"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/projects"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.5 },
  ];

  const notePages: MetadataRoute.Sitemap = notes
    .filter((note) => note.status === "published")
    .map((note) => ({
      url: absoluteUrl(`/notes/${note.slug}`),
      lastModified: note.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticPages, ...notePages];
}
