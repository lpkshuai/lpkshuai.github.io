import LabHomeView from "@/components/lab/LabHomeView";
import { labCategories } from "@/content/lab/experiments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "交互实验室",
  description: "CSS、React 与前端交互效果的实验和实现记录。",
  alternates: { canonical: "/lab" },
};

export default function LabGalleryPage() {
  return <LabHomeView categories={labCategories} />;
}
