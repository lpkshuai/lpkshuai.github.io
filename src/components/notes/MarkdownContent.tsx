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

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  /**
   * ESC关闭图片预览
   */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImg(null);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  /**
   * highlight.js主题
   */
  useEffect(() => {
    const old = document.querySelector("link[data-highlight-style]");

    if (old) {
      old.remove();
    }

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${
      theme === "dark" ? "github-dark" : "github"
    }.min.css`;

    link.dataset.highlightStyle = "true";

    document.head.appendChild(link);
  }, [theme]);

  return (
    <div className="prose prose-invert max-w-none space-y-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1
              className="
              pt-4
              text-3xl
              font-semibold
              tracking-tight
              text-foreground
            "
            >
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2
              className="
              pt-4
              text-2xl
              font-semibold
              text-foreground
            "
            >
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3
              className="
              pt-3
              text-xl
              font-semibold
              text-foreground
            "
            >
              {children}
            </h3>
          ),

          p: ({ node, children }) => {
            const hasImage = node?.children?.some(
              (child: any) => child.tagName === "img",
            );

            if (hasImage) {
              return <>{children}</>;
            }

            return (
              <p
                className="
                leading-8
                text-foreground-muted
              "
              >
                {children}
              </p>
            );
          },

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
                text-(--accent)
                underline
                underline-offset-4
                transition
                hover:text-(--accent-strong)
              "
            >
              {children}
            </a>
          ),

          blockquote: ({ children }) => (
            <blockquote
              className="
                border-l-2
                border-(--accent)
                pl-4
                text-foreground-muted
              "
            >
              {children}
            </blockquote>
          ),

          ul: ({ children }) => (
            <ul
              className="
              list-disc
              space-y-2
              pl-5
              leading-7
              text-foreground-muted
            "
            >
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol
              className="
              list-decimal
              space-y-2
              pl-5
              leading-7
              text-foreground-muted
            "
            >
              {children}
            </ol>
          ),

          code: ({ className, children }) => {
            const inline = !className?.includes("language-");

            if (inline) {
              return (
                <code
                  className="
                    rounded
                    px-1.5
                    py-0.5
                    text-[0.9em]
                    text-(--accent)
                  "
                  style={{
                    backgroundColor: "var(--accent-bg)",
                  }}
                >
                  {children}
                </code>
              );
            }

            return <code className={className}>{children}</code>;
          },

          pre: ({ children }) => (
            <div
              className="
                overflow-hidden
                rounded-lg
                border
              "
              style={{
                backgroundColor: "var(--panel)",

                borderColor: "var(--panel-border)",
              }}
            >
              <pre
                className="
                  overflow-x-auto
                  p-4
                  text-sm
                  leading-7
                "
              >
                {children}
              </pre>
            </div>
          ),

          img: ({ src, alt }) => {
            const imageSrc = typeof src === "string" ? src : undefined;

            if (!imageSrc) return null;

            return (
              <figure
                className="
                  my-6
                  overflow-hidden
                  rounded-xl
                  border
                "
                style={{
                  backgroundColor: "var(--panel)",

                  borderColor: "var(--panel-border)",
                }}
              >
                <img
                  src={imageSrc}
                  alt={alt || ""}
                  loading="lazy"
                  className="
                    mx-auto
                    max-w-full
                    cursor-zoom-in
                    transition
                    hover:scale-[1.01]
                  "
                  onClick={() => setPreviewImg(imageSrc)}
                />

                {alt && (
                  <figcaption
                    className="
                        border-t
                        px-4
                        py-3
                        text-sm
                        text-foreground-dim
                      "
                    style={{
                      borderColor: "var(--panel-border)",
                    }}
                  >
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },

          table: ({ children }) => (
            <div
              className="
                my-6
                overflow-x-auto
                rounded-lg
                border
              "
              style={{
                borderColor: "var(--table-border)",
              }}
            >
              <table
                className="
                  min-w-full
                  border-collapse
                "
              >
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead
              style={{
                backgroundColor: "var(--table-header)",
              }}
            >
              {children}
            </thead>
          ),

          tr: ({ children }) => (
            <tr
              className="
                transition-colors
                hover:bg-(--panel)
              "
            >
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th
              className="
                px-4
                py-3
                text-left
                text-sm
                font-semibold
                text-foreground
              "
              style={{
                borderBottom: "1px solid var(--table-border)",
              }}
            >
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td
              className="
                px-4
                py-3
                text-sm
                text-foreground-muted
              "
              style={{
                borderBottom: "1px solid var(--table-border)",
              }}
            >
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {previewImg && (
        <div
          className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-sm
            "
          onClick={() => setPreviewImg(null)}
        >
          <img
            src={previewImg}
            className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-lg
                shadow-2xl
              "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
