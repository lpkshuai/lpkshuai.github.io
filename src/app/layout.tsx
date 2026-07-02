import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
