"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const { theme } = useTheme();

  // ⭐ 图片预览状态
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  // ⭐ ESC 关闭预览
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImg(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ⭐ highlight.js 主题
  useEffect(() => {
    const loadHighlightStyle = async () => {
      const existingLink = document.querySelector("link[data-highlight-style]");
      if (existingLink) existingLink.remove();

      const style = theme === "dark" ? "github-dark" : "github";

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${style}.min.css`;
      link.setAttribute("data-highlight-style", "true");

      document.head.appendChild(link);
    };

    loadHighlightStyle();
  }, [theme]);

  return (
    <div className="space-y-6 prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-semibold tracking-tight text-foreground pt-4">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-4">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="text-xl font-semibold tracking-tight text-foreground pt-3">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="text-lg font-semibold tracking-tight text-foreground pt-2">
              {children}
            </h4>
          ),

          // ⭐ 修复：避免 <p><img/></p> + figure 嵌套问题
          p: ({ node, children }) => {
            const hasImage = node?.children?.some(
              (child: any) => child.tagName === "img",
            );

            if (hasImage) {
              return <>{children}</>;
            }

            return (
              <p className="leading-8 text-foreground-muted">{children}</p>
            );
          },

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-(--accent) underline decoration-white/20 underline-offset-4 transition hover:text-(--accent-strong)"
            >
              {children}
            </a>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-(--accent)/70 pl-4 text-foreground-muted">
              {children}
            </blockquote>
          ),

          ul: ({ children }) => (
            <ul className="space-y-2 pl-5 leading-7 text-foreground-muted list-disc">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="space-y-2 pl-5 leading-7 text-foreground-muted list-decimal">
              {children}
            </ol>
          ),

          li: ({ children }) => <li>{children}</li>,

          code: ({ className, children }) => {
            const isInline = !className?.includes("language-");

            if (isInline) {
              return (
                <code
                  className="rounded px-1.5 py-0.5 text-[0.9em] text-(--accent)"
                  style={{ backgroundColor: "var(--accent-bg)" }}
                >
                  {children}
                </code>
              );
            }

            return <code className={className}>{children}</code>;
          },

          pre: ({ children }) => (
            <div
              className="overflow-hidden rounded-lg border border-white/10"
              style={{ backgroundColor: "var(--panel)" }}
            >
              <pre className="overflow-x-auto p-4 text-sm leading-7">
                {children}
              </pre>
            </div>
          ),

          // ⭐ 图片 + Lightbox 核心
          img: ({ src, alt }) => {
            const imageSrc = typeof src === "string" ? src : undefined;

            if (!imageSrc) return null;

            return (
              <figure className="my-6 overflow-hidden rounded-xl border border-white/10 bg-white/3">
                <img
                  src={imageSrc}
                  alt={alt || ""}
                  loading="lazy"
                  className="h-auto w-full cursor-zoom-in transition-transform duration-200 hover:scale-[1.01]"
                  onClick={() => setPreviewImg(imageSrc)}
                />

                {alt && (
                  <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-foreground-dim">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },

          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-white/10">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="border-b border-white/10 bg-white/3">
              {children}
            </thead>
          ),

          tbody: ({ children }) => (
            <tbody className="divide-y divide-white/10">{children}</tbody>
          ),

          tr: ({ children }) => <tr>{children}</tr>,

          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="px-4 py-2 text-sm text-foreground-muted">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {/* ⭐ Lightbox */}
      {previewImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewImg(null)}
        >
          <img
            src={previewImg}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl transition-transform duration-200"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
