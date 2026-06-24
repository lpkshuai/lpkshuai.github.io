import NotesArchive from "@/components/notes/NotesArchive";
import { getAllNotes } from "@/lib/notes";

export default async function ArchivePage() {
  const notes = await getAllNotes();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 font-mono selection:bg-[var(--accent)]/30">
      <header className="mb-12 space-y-5 border-b border-dashed border-[var(--panel-border)] pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          <span className="h-2 w-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse"></span>
          DATA_RETRIEVAL_TERMINAL // 检索终端
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-[var(--foreground)] leading-tight">
          Archive /{" "}
          <span className="font-serif italic tracking-wide bg-gradient-to-r from-[var(--accent)] to-amber-500 bg-clip-text text-transparent">
            战术档案库
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-8 text-[var(--foreground-muted)]">
          "所有已破译与封印中的卷轴皆存放于此。利用下方的检索阵列，定位你在代码大陆上需要的战术知识。"
        </p>
      </header>

      <NotesArchive notes={notes} />
    </main>
  );
}
