import { Note } from "@/types/note";

export const notes: Note[] = [
  {
    slug: "vue-reactivity",
    title: "Vue Reactivity System",
    category: "Vue",
    type: "concept",
    description:
      "A note about the mental model behind Vue reactivity and how updates flow through state changes.",
    status: "published",
    tags: ["Vue", "Reactivity", "Framework"],
    source: {
      label: "Cnblogs",
      url: "https://www.cnblogs.com/lpkshuai",
    },
    updatedAt: "2026-06-18",
    readingTime: "6 min read",
  },
  {
    slug: "react-hooks",
    title: "React Hooks",
    category: "React",
    type: "concept",
    description:
      "Core hooks, common patterns, and the small rules that make React state easier to reason about.",
    status: "learning",
    tags: ["React", "Hooks", "State"],
    updatedAt: "2026-06-19",
    readingTime: "8 min read",
  },
  {
    slug: "next-app-router",
    title: "Next App Router",
    category: "Next.js",
    type: "setup",
    description:
      "Notes from learning the App Router architecture, route conventions, layouts, and page structure.",
    status: "learning",
    tags: ["Next.js", "App Router", "Routing"],
    updatedAt: "2026-06-20",
    readingTime: "7 min read",
  },
  {
    slug: "echarts-resize",
    title: "ECharts Resize Notes",
    category: "Frontend",
    type: "debugging",
    description:
      "A practical debugging note for chart resize behavior in real interface layouts.",
    status: "draft",
    tags: ["ECharts", "Debugging", "Layout"],
    source: {
      label: "Cnblogs",
      url: "https://www.cnblogs.com/lpkshuai",
    },
    updatedAt: "2026-06-20",
    readingTime: "5 min read",
  },
];
