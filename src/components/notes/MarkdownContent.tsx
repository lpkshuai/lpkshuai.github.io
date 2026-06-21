"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const { theme } = useTheme();

  useEffect(() => {
    // 动态加载 highlight.js 样式
    const loadHighlightStyle = async () => {
      // 移除旧的样式
      const existingLink = document.querySelector('link[data-highlight-style]');
      if (existingLink) {
        existingLink.remove();
      }

      // 根据主题加载对应的样式
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
          p: ({ children }) => (
            <p className="leading-8 text-foreground-muted">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] underline decoration-white/20 underline-offset-4 transition hover:text-[var(--accent-strong)]"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-[var(--accent)]/70 pl-4 text-foreground-muted">
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
                <code className="rounded px-1.5 py-0.5 text-[0.9em] text-[var(--accent)]" style={{ backgroundColor: 'var(--accent-bg)' }}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }) => (
            <div className="overflow-hidden rounded-lg border border-white/10" style={{ backgroundColor: 'var(--panel)' }}>
              <pre className="overflow-x-auto p-4 text-sm leading-7">
                {children}
              </pre>
            </div>
          ),
          img: ({ src, alt }) => (
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              <img
                src={src}
                alt={alt || ""}
                className="h-auto w-full"
                loading="lazy"
              />
              {alt && (
                <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-foreground-dim">
                  {alt}
                </figcaption>
              )}
            </figure>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-white/10">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-white/10 bg-white/[0.03]">
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
            <td className="px-4 py-2 text-sm text-foreground-muted">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
