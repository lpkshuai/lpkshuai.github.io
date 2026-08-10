import Hero from "@/components/hero/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "前端开发笔记与交互实验",
  description:
    "记录 Vue、React、Next.js、React Native 等前端开发中的实践笔记、问题排查与交互实验。",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
