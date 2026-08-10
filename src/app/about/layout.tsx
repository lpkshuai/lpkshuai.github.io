import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 pkli",
  description: "了解 pkli 的前端技术栈、学习方向与公开项目。",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
