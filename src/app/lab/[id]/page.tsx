import { labCategories } from "@/content/lab/experiments";
import LabDetailView from "@/components/lab/LabDetailView";
import { notFound } from "next/navigation";

// 为静态导出预生成所有可能的 id 路径
export function generateStaticParams() {
  return labCategories.flatMap((category) =>
    category.experiments.map((experiment) => ({
      id: experiment.id,
    })),
  );
}

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // 校验一下是否有这个实验，没有就返回 404
  const experimentExists = labCategories
    .flatMap((c) => c.experiments)
    .some((exp) => exp.id === id);

  if (!experimentExists) {
    notFound();
  }

  return <LabDetailView id={id} />;
}
