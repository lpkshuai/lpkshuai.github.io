export type Note = {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: "completed" | "learning";
};
