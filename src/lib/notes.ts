import { readdir, readFile } from "fs/promises";
import { createHash } from "crypto";
import path from "path";
import type { Note, NoteStatus, NoteType, NoteWithContent } from "@/types/note";

type Frontmatter = Partial<{
  slug: string;
  title: string;
  category: string;
  type: NoteType;
  description: string;
  status: NoteStatus;
  tags: string | string[];
  updatedAt: string;
  readingTime: string;
}>;

const notesDirectory = path.join(process.cwd(), "src", "content", "notes");

function createStableHash(value: string) {
  return createHash("sha1").update(value).digest("hex").slice(0, 6);
}

function slugifyText(text: string) {
  return text
    .normalize("NFKD")
    .trim()
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function createSlug(title: string, frontmatterSlug?: string) {
  // if (frontmatterSlug) {
  //   return slugifyText(frontmatterSlug);
  // }

  const source = frontmatterSlug || title;
  const readablePart = slugifyText(source);
  const hash = createStableHash(title);

  return readablePart ? `${readablePart}-${hash}` : `note-${hash}`;
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith("---")) {
    return { frontmatter: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { frontmatter: {}, content: raw };
  }

  const frontmatterText = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trimStart();
  const frontmatter: Frontmatter = {};

  for (const line of frontmatterText.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim() as keyof Frontmatter;
    const value = line.slice(separatorIndex + 1).trim();

    if (key === "tags") {
      frontmatter.tags = value
        .replace(/^\[/, "")
        .replace(/\]$/, "")
        .split(",")
        .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }

    frontmatter[key] = value.replace(/^["']|["']$/g, "") as never;
  }

  return { frontmatter, content };
}

function getTitleFromContent(content: string, fallback: string) {
  const heading = content.match(/^#\s+(.+)$/m);
  return heading?.[1]?.trim() ?? fallback;
}

function getDescriptionFromContent(content: string) {
  const paragraph = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(
      (line) =>
        line &&
        !line.startsWith("#") &&
        !line.startsWith("```") &&
        !line.startsWith("!") &&
        !line.startsWith(">"),
    );

  return paragraph?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 140);
}

function estimateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[^\p{Script=Han}\w]+/gu, " ")
    .trim();
  const chineseChars = Array.from(words.matchAll(/\p{Script=Han}/gu)).length;
  const latinWords = words.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil((chineseChars + latinWords) / 400));

  return `${minutes} min read`;
}

function inferCategory(title: string): string {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("vue")) return "Vue";
  if (lowerTitle.includes("next")) return "Next.js";
  if (lowerTitle.includes("axios")) return "JavaScript";
  if (lowerTitle.includes("vite")) return "Tooling";
  if (lowerTitle.includes("pdf") || lowerTitle.includes("docx")) return "Frontend";

  return "Frontend";
}

function inferType(title: string): NoteType {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes("错误") ||
    lowerTitle.includes("certificate") ||
    lowerTitle.includes("self signed")
  ) {
    return "debugging";
  }

  if (
    lowerTitle.includes("部署") ||
    lowerTitle.includes("配置") ||
    lowerTitle.includes("代理")
  ) {
    return "setup";
  }

  return "snippet";
}

function inferTags(title: string, category: string, type: NoteType) {
  const tags = new Set<string>([category, type]);
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("github")) tags.add("GitHub Pages");
  if (lowerTitle.includes("axios")) tags.add("Axios");
  if (lowerTitle.includes("vite")) tags.add("Vite");
  if (lowerTitle.includes("qrcode")) tags.add("QRCode");
  if (lowerTitle.includes("vue flow")) tags.add("Vue Flow");
  if (lowerTitle.includes("pdf")) tags.add("PDF");
  if (lowerTitle.includes("excel")) tags.add("Excel");

  return Array.from(tags);
}

async function getMarkdownFiles(directory = notesDirectory): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return getMarkdownFiles(fullPath);
      }

      if (!entry.name.endsWith(".md")) {
        return [];
      }

      return [path.relative(notesDirectory, fullPath)];
    }),
  );

  return files.flat();
}

async function readMarkdownNote(fileName: string): Promise<NoteWithContent> {
  const filePath = path.join(notesDirectory, fileName);
  const raw = await readFile(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(raw);
  const fallbackTitle = path.basename(fileName).replace(/\.md$/i, "");
  const title = frontmatter.title ?? getTitleFromContent(content, fallbackTitle);
  const category = frontmatter.category ?? inferCategory(title);
  const type = frontmatter.type ?? inferType(title);

  return {
    slug: createSlug(title, frontmatter.slug),
    title,
    category,
    type,
    description:
      frontmatter.description ??
      getDescriptionFromContent(content) ??
      "A practical frontend note migrated from my older writing archive.",
    status: frontmatter.status ?? "published",
    tags: Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : inferTags(title, category, type),
    source: {
      label: "Cnblogs",
      url: "https://www.cnblogs.com/lpkshuai",
    },
    updatedAt: frontmatter.updatedAt ?? "2026-06-20",
    readingTime: frontmatter.readingTime ?? estimateReadingTime(content),
    content,
  };
}

export async function getAllNotes(): Promise<Note[]> {
  const files = await getMarkdownFiles();
  const notes = await Promise.all(files.map(readMarkdownNote));

  return notes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getAllNotesWithContent() {
  const files = await getMarkdownFiles();
  const notes = await Promise.all(files.map(readMarkdownNote));

  return notes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getNoteBySlug(slug: string) {
  const notes = await getAllNotesWithContent();
  return notes.find((note) => note.slug === slug);
}
