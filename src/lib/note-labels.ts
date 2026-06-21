import type { NoteStatus, NoteType } from "@/types/note";

export const statusLabel: Record<NoteStatus, string> = {
  published: "Published",
  learning: "Learning",
  draft: "Draft",
};

export const typeLabel: Record<NoteType, string> = {
  concept: "Concept",
  debugging: "Debugging",
  setup: "Setup",
  snippet: "Snippet",
  review: "Review",
};
