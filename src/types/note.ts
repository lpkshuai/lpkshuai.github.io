export type NoteStatus = "published" | "learning" | "draft";

export type NoteType = "concept" | "debugging" | "setup" | "snippet" | "review";

export type Note = {
  slug: string;
  title: string;
  category: string;
  type: NoteType;
  description: string;
  status: NoteStatus;
  tags: string[];
  source?: {
    label: string;
    url: string;
  };
  updatedAt: string;
  readingTime: string;
};

export type NoteWithContent = Note & {
  content: string;
};
