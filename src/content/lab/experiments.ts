import type { LabCategory } from "@/types/lab";

export const labCategories: LabCategory[] = [
  {
    id: "css-illusion",
    category: "CSS Illusion",
    title: {
      zh: "幻影学派 // CSS 动效",
      en: "Phantom School // CSS Motion",
    },
    description: {
      zh: "纯 CSS 与 DOM 操纵构建的视觉骗局与丝滑交互。",
      en: "Visual illusions and smooth interactions built with pure CSS and DOM manipulation.",
    },
    icon: "✧",
    experiments: [
      {
        id: "glitch-matrix",
        title: "Glitch Matrix",
        description: "利用伪元素与关键帧动画实现的赛博朋克故障文字破坏效果。",
        tags: ["CSS3", "Keyframes", "Mix-blend"],
        cover:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        // demoUrl: "/lab/glitch-matrix",
        sourceUrl: "https://github.com/lpkshuai", // 替换为你的真实仓库地址
        // ✅ 核心代码片段
        codeSnippet: `
.glitch-text {
  position: relative;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,255,255,0.5);
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.glitch-text::before {
  animation: glitch-1 2s infinite linear alternate-reverse;
  color: #0ff; /* Cyan glitch */
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

@keyframes glitch-1 {
  0% { transform: translateX(0); }
  20% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  60% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
}
        `.trim(),
      },
      {
        id: "glassmorphism-card",
        title: "Glassmorphism Card",
        description: "极致物理质感的毛玻璃交互卡片，带有视差悬浮倒影。",
        tags: ["CSS", "React", "Interactive"],
        cover:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        // demoUrl: "/lab/glassmorphism-card",
        sourceUrl: "https://github.com/lpkshuai",
        codeSnippet: `
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

/* 鼠标悬浮时的 3D 偏移 */
.glass-card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);
}
        `.trim(),
      },
      {
        id: "neon-pulse", // ✅ 唯一标识符，用于路由和组件匹配
        title: "Neon Pulse", // 标题
        description: "使用 CSS 滤镜与多重阴影模拟的真实霓虹灯管闪烁效果。", // 描述
        tags: ["CSS", "Filter", "Animation"], // 技术标签
        cover: "/experiments/css/neon-pulse.png", // 封面图 URL
        // demoUrl: "/lab/neon-pulse", // 演示链接（通常就是当前页面）
        sourceUrl: "https://github.com/lpkshuai", // 源码地址
        // ✅ 核心代码片段（用于详情页展示）
        codeSnippet: `
.neon-text {
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff00de,
    0 0 40px #ff00de;
  animation: flicker 1.5s infinite alternate;
}
        `.trim(),
        // ✅ RPG 属性（可选，用于展示复杂度或性能指标）
        stats: [
          {
            name: { zh: "性能消耗", en: "GPU Cost" },
            value: 15,
            status: "LOW",
          },
        ],
      },
    ],
  },
  {
    id: "webgl-threejs",
    category: "WebGL & Three.js",
    title: {
      zh: "高维空间 // 3D 渲染",
      en: "Higher Dimension // 3D Rendering",
    },
    description: {
      zh: "突破 2D 限制，在浏览器中构建可交互的三维几何体与物理世界。",
      en: "Breaking 2D limits to build interactive 3D geometries and physical worlds in the browser.",
    },
    icon: "⟁",
    experiments: [
      {
        id: "webgl-01",
        title: "Interactive Particle Core",
        description:
          "数以万计的 3D 粒子引力场，跟随鼠标轨迹实时计算碰撞与逃逸。",
        tags: ["Three.js", "Math", "Canvas"],
        cover:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        demoUrl: "/lab/webgl-01",
      },
    ],
  },
];
