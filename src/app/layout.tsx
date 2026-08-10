import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import { siteConfig } from "@/lib/seo";

import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: "%s | pkli's Personal Lab",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "OdsoXbZN5yDWQ7Qi0wIhECK2PZ9cxBQT1yISuMb1zFM",
  },
};

// 合并主题与语言的初始化脚本
const initScript = `
(function() {
  try {
    // 1. 初始化主题
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    // 2. 初始化语言 (假设默认语言是 'zh')
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== 'zh') {
      document.documentElement.setAttribute('lang', savedLang);
      // 如果不是默认语言，隐藏页面防止闪烁
      document.documentElement.style.visibility = 'hidden';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning 允许 html 标签的属性在客户端与服务端不一致时不报错
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
