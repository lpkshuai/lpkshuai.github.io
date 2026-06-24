import Link from "next/link";
import NoteCard from "@/components/notes/NoteCard";
import { getAllNotes } from "@/lib/notes";

import { useDictionary } from "@/hooks/useDictionary";

export default async function NotesPage() {
  const notes = await getAllNotes();
  const categories = Array.from(new Set(notes.map((note) => note.category)));

  // 拆分笔记展示逻辑：1篇作为高亮头条，其余4篇作为常规网格
  const featuredNote = notes[0];
  const recentNotes = notes.slice(1, 5);

  const publishedCount = notes.filter(
    (note) => note.status === "published",
  ).length;
  const draftCount = notes.filter((note) => note.status === "draft").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 font-mono selection:bg-[var(--accent)]/30">
      {/* 模块一：次世代游戏库控制台 (Console Library Header) */}
      <header className="mb-16 space-y-6">
        {/* 顶部主视觉与数据统计 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-2 border-dashed border-[var(--panel-border)] pb-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              <span className="h-2 w-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
              DATA_ARCHIVE // 个人知识库
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-[var(--foreground)] leading-tight">
              Notes /{" "}
              <span className="font-serif italic tracking-wide bg-gradient-to-r from-[var(--accent)] to-amber-500 bg-clip-text text-transparent">
                战术图鉴
              </span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-[var(--foreground-muted)]">
              "冒险途中的见闻与阵痛。记录每一次代码踩坑与灵感迸发的时刻。这里存放着我从前端世界收集来的实战卷轴与魔法蓝图。所有卷轴皆从真实的代码搏杀中提取。"
            </p>
          </div>

          {/* 类似 Steam 个人资料的精简状态栏 */}
          <div className="flex gap-6 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-5 shadow-lg">
            <div className="flex flex-col justify-end text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground-dim)] mb-1">
                Total Logs
              </span>
              <span className="text-3xl font-black text-[var(--foreground)] leading-none">
                {notes.length}
              </span>
            </div>
            <div className="w-px bg-[var(--panel-border)]"></div>
            <div className="flex flex-col justify-end text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">
                Deployed
              </span>
              <span className="text-3xl font-black text-[var(--accent)] leading-none">
                {publishedCount}
              </span>
            </div>
            <div className="w-px bg-[var(--panel-border)]"></div>
            <div className="flex flex-col justify-end text-right opacity-60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground-dim)] mb-1">
                Drafts
              </span>
              <span className="text-xl font-bold text-[var(--foreground)] leading-none">
                {draftCount}
              </span>
            </div>
          </div>
        </div>

        {/* 技能派系分类 (标签过滤器) */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground-dim)] mr-2">
            &gt; Filter_By_Tags:
          </span>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/notes/archive?category=${encodeURIComponent(category)}`}
              className="group relative overflow-hidden rounded border border-[var(--panel-border)] bg-[var(--panel)] px-3 py-1.5 text-xs font-bold text-[var(--foreground-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] shadow-sm"
            >
              <span className="relative z-10">{category}</span>
              <div className="absolute inset-0 bg-[var(--accent)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
            </Link>
          ))}
        </div>
      </header>

      {/* ================= 以下为原有的 1 + 4 完美布局，保持不变 ================= */}

      {/* 模块二：最新破译 (Featured Note) */}
      {featuredNote && (
        <section aria-labelledby="featured-note-title" className="mb-12">
          <h2
            id="featured-note-title"
            className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--accent-strong)]"
          >
            <span className="animate-pulse">✦</span> Latest Breakthrough //
            最新破译
          </h2>

          <div className="group relative rounded-2xl border-2 border-[var(--accent-strong)]/30 bg-[var(--panel)] p-2 transition-all hover:border-[var(--accent-strong)] hover:shadow-[0_0_30px_var(--accent-strong)]/20">
            <div className="absolute -right-3 -top-3 rotate-12 rounded-lg border-2 border-[var(--accent-strong)] bg-[var(--background)] px-3 py-1 text-xs font-black text-[var(--accent-strong)] shadow-lg">
              NEW!
            </div>
            <div className="rounded-xl bg-[var(--background)]">
              <NoteCard note={featuredNote} featured />
            </div>
          </div>
        </section>
      )}

      {/* 模块三：最近解锁 (Recent Notes Grid) */}
      <section aria-labelledby="recent-notes-title" className="mb-16">
        <h2
          id="recent-notes-title"
          className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--foreground-muted)]"
        >
          Recently Unlocked // 最近解锁
        </h2>

        <ul className="grid gap-6 md:grid-cols-2">
          {recentNotes.map((note) => (
            <li key={note.slug} className="group h-full">
              <div className="h-full rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-1 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_30px_-10px_var(--accent-bg)]">
                <div className="h-full rounded-xl bg-[var(--background)]">
                  <NoteCard note={note} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 模块四：查看全部 (Explore Full Library Action) */}
      <section className="mt-8 border-t border-dashed border-[var(--panel-border)] pt-12">
        <Link
          href="/notes/archive"
          className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] py-12 transition-all hover:border-[var(--accent)] hover:shadow-[0_0_40px_var(--accent-bg)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--background)] border border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_var(--accent-bg)] transition-transform group-hover:scale-110">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              Access Full Archive
            </h3>
            <p className="text-xs font-sans text-[var(--foreground-muted)]">
              Enter the grand library to search, filter, and explore all
              knowledge tomes.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
