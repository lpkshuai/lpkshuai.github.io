import Link from "next/link";

const topics = [
  "Motion UI",
  "Markdown Notes",
  "Frontend Lab",
  "Learning in Public",
];

const cardStack = [
  {
    label: "Lab",
    desc: "Interactive demos, motion experiments, and small frontend ideas built while learning.",
    href: "/lab",
  },
  {
    label: "Notes",
    desc: "A growing collection of Markdown notes about frontend, frameworks, and problem solving.",
    href: "/notes",
  },
  {
    label: "About",
    desc: "Background, tech stack, current learning path, and ways to connect.",
    href: "/about",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-center gap-10 px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-foreground/70">
            Frontend / Notes / Experiments
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-balance md:text-7xl">
              Frontend Lab for Notes,{" "}
              <span className="text-[var(--accent)]">Motion</span> and
              Experiments.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-foreground/70">
              A personal space for collecting frontend notes, building small
              interaction demos, and documenting the ideas I explore while
              learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-foreground/80"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/lab"
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-background transition hover:bg-[var(--accent-strong)] active:scale-95"
            >
              Explore Lab
            </Link>

            <Link
              href="/notes"
              className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/10 active:scale-95"
            >
              Read Notes
            </Link>
          </div>
        </div>

        <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 ring-1 ring-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-sm font-medium">Lab Status</span>
            <span className="rounded-full bg-[var(--accent)]/15 px-2 py-1 text-xs text-[var(--accent)]">
              Growing
            </span>
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                Current focus
              </p>
              <p className="mt-2 text-lg font-medium">
                Motion, visual effects, and better UI craft.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border border-white/10 bg-black/10 p-3">
                <p className="text-2xl font-semibold">Lab</p>
                <p className="mt-1 text-foreground/55">Demo shelf</p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/10 p-3">
                <p className="text-2xl font-semibold">Notes</p>
                <p className="mt-1 text-foreground/55">Markdown base</p>
              </div>
            </div>

            <div className="rounded-md border border-dashed border-white/15 p-3 text-sm leading-6 text-foreground/60">
              Next: add small animation demos, then explore Canvas, Three.js,
              and shader experiments.
            </div>
          </div>
        </aside>
      </div>

      <div>
        <ul className="grid gap-4 md:grid-cols-3">
          {cardStack.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06] active:scale-98"
                >
                  <span className="font-medium">{item.label}</span>
                  <p className="mt-3 text-sm leading-6 text-foreground/60">
                    {item.desc}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
