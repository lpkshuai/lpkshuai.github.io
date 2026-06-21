export default function ProjectsPage() {
  const roadmap = [
    "Interactive animation demos",
    "Three.js experiments",
    "Canvas playground",
    "Small AI-assisted tools",
  ];

  const placeholders = [
    {
      title: "Frontend Sandbox",
      desc: "Small experiments and component ideas.",
    },
    {
      title: "Motion UI",
      desc: "Micro interactions and animation studies.",
    },
    {
      title: "AI Playground",
      desc: "Interesting AI powered side projects.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Projects</h1>

          <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-sm text-[var(--accent)]">
            In Progress
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-foreground/70 leading-7">
          Building in public. This section will gradually evolve into a
          collection of experiments, tools, and frontend projects created during
          my learning journey.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {placeholders.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <h2 className="font-medium">{item.title}</h2>

            <p className="mt-3 text-sm leading-6 text-foreground/60">
              {item.desc}
            </p>

            <div className="mt-5 text-xs text-foreground/40">Coming Soon</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-white/10 p-6">
        <h3 className="font-medium">Next Milestones</h3>

        <ul className="mt-4 space-y-3 text-sm text-foreground/70">
          {roadmap.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
