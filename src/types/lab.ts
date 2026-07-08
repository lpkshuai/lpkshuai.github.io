// 定义 Demo 的展示模式
export type DemoRenderType =
  | "component" // 默认：当前项目内的 React 组件
  | "iframe" // 嵌入模式：用于 public 目录下的 Vue/静态项目
  | "media"; // 媒体模式：用于外部链接，仅展示截图/GIF/视频

export interface LabExperiment {
  // 必传字段
  id: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;

  // 核心扩展字段
  renderType?: DemoRenderType; // 默认为 'component'
  // 场景 A: React 组件 (现有逻辑)
  // component?: React.LazyExoticComponent<...>; // 组件通过映射表引入，此处不需要存数据
  // 场景 B: Iframe 嵌入 (Vue/旧项目)
  embedUrl?: string;
  // 场景 C: 媒体预览 (外部链接/视频)
  previewMedia?: {
    type: "image" | "gif" | "video";
    src: string; // 预览资源的 URL
    poster?: string; // 视频封面
  };

  // 公共字段
  demoUrl?: string; // "在线演示" 按钮的跳转地址
  sourceUrl?: string; // "源代码" 按钮的地址
  codeSnippet?: string; // 核心源码片段
  stats?: { name: { zh: string; en: string }; value: number; status: string }[]; // RPG 属性数值
  logs?: { title: string; content: string }[]; // 锻造日志（支持多段）
  controls?: ("toggle" | "intensity")[]; // 支持的交互控制维度
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
