export const siteConfig = {
  name: "pkli's Personal Lab",
  description:
    "pkli 的前端开发笔记、交互实验与个人项目，记录 Vue、React、Next.js 和 React Native 等实践经验。",
  url: "https://lpkshuai.github.io",
  locale: "zh_CN",
  author: {
    name: "pkli",
    url: "https://github.com/lpkshuai",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
