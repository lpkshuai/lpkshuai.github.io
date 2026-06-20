import Image from "next/image";

type MarkdownContentProps = {
  content: string;
};

type Block =
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "list"; items: string[]; ordered: boolean }
  | { type: "code"; language: string; code: string }
  | { type: "image"; alt: string; src: string };

function parseBlocks(content: string): Block[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.replace("```", "").trim();
      const code: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "code", language, code: code.join("\n") });
      index += 1;
      continue;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      blocks.push({
        type: "image",
        alt: imageMatch[1],
        src: imageMatch[2].split(" ")[0],
      });
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length as 1 | 2 | 3 | 4,
        text: headingMatch[2],
      });
      index += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }

      blocks.push({ type: "blockquote", text: quoteLines.join(" ") });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items: string[] = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
        if (!pattern.test(current)) break;

        items.push(current.replace(pattern, ""));
        index += 1;
      }

      blocks.push({ type: "list", items, ordered });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (
        !current ||
        current.startsWith("```") ||
        current.startsWith("#") ||
        current.startsWith(">") ||
        current.startsWith("![") ||
        /^[-*]\s+/.test(current) ||
        /^\d+\.\s+/.test(current)
      ) {
        break;
      }

      paragraphLines.push(current);
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-white/[0.08] px-1.5 py-0.5 text-[0.9em] text-[var(--accent)]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2].split(" ")[0]}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent)] underline decoration-white/20 underline-offset-4 transition hover:text-[var(--accent-strong)]"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseBlocks(content);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const headingClass = "font-semibold tracking-tight text-foreground";

          if (block.level === 1) {
            return (
              <h2 key={index} className={`${headingClass} pt-4 text-3xl`}>
                {renderInline(block.text)}
              </h2>
            );
          }

          if (block.level === 2) {
            return (
              <h2 key={index} className={`${headingClass} pt-4 text-2xl`}>
                {renderInline(block.text)}
              </h2>
            );
          }

          if (block.level === 3) {
            return (
              <h3 key={index} className={`${headingClass} pt-3 text-xl`}>
                {renderInline(block.text)}
              </h3>
            );
          }

          return (
            <h4 key={index} className={`${headingClass} pt-2 text-lg`}>
              {renderInline(block.text)}
            </h4>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="leading-8 text-foreground/70">
              {renderInline(block.text)}
            </p>
          );
        }

        if (block.type === "blockquote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-[var(--accent)]/70 pl-4 text-foreground/65"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`space-y-2 pl-5 leading-7 text-foreground/70 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "code") {
          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10 bg-black/30"
            >
              {block.language ? (
                <div className="border-b border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/40">
                  {block.language}
                </div>
              ) : null}
              <pre className="overflow-x-auto p-4 text-sm leading-7 text-foreground/75">
                <code>{block.code}</code>
              </pre>
            </div>
          );
        }

        if (block.type === "image") {
          return (
            <figure
              key={index}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={1200}
                height={720}
                className="h-auto w-full"
                unoptimized
              />
              {block.alt ? (
                <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-foreground/45">
                  {block.alt}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
}
