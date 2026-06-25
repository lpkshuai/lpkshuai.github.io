export interface LabExperiment {
  id: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  demoUrl?: string;
  sourceUrl?: string;
  // ✅ 新增：RPG 属性数值
  stats?: { name: { zh: string; en: string }; value: number; status: string }[];
  // ✅ 新增：锻造日志（支持多段）
  logs?: { title: string; content: string }[];
  // ✅ 新增：核心源码片段
  codeSnippet?: string;
  // ✅ 新增：支持的交互控制维度
  controls?: ('toggle' | 'intensity')[];
}

// 多语言字段类型，方便复用
export type LocalizedText = {
  zh: string;
  en: string;
};

export interface LabCategory {
  id: string;
  category: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
  experiments: LabExperiment[];
}

