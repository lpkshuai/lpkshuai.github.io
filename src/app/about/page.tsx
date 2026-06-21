import Link from "next/link";

const stack = {
  core: [
    "Vue",
    "Vue 3",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "UniApp",
  ],
  learning: ["Next.js", "React Server Components", "Motion UI", "Three.js"],
};

const journey = [
  {
    year: "2019",
    desc: "Started frontend journey with Vue 2 and WeChat Mini Programs.",
  },
  {
    year: "2022",
    desc: "Worked with Vue 3, H5 applications, and UniApp cross-platform development.",
  },
  {
    year: "2023",
    desc: "Explored React Native, continued Vue 3 projects, and started using AI tools.",
  },
  {
    year: "2025",
    desc: "Focused on both React and Vue, improving architecture and frontend engineering skills.",
  },
  {
    year: "2026",
    desc: "Building Personal Lab with Next.js and modern web experiments.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      {/* Hero */}
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-foreground/70">
            About / Personal Lab
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Building, Learning,
            <span className="text-[var(--accent)]"> and Sharing</span> in
            Public.
          </h1>

          <p className="text-lg leading-8 text-foreground/70 max-w-2xl">
            Frontend developer with 6+ years of experience, currently exploring
            React, Next.js, motion design, and modern web architectures. This
            site is my personal lab for notes, experiments, and ideas.
          </p>
        </div>

        {/* Status Card */}
        <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-sm font-medium">Status</span>
            <span className="rounded-full bg-[var(--accent)]/15 px-2 py-1 text-xs text-[var(--accent)]">
              Active
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-foreground/40">Role</p>
              <p className="font-medium">Frontend Developer</p>
            </div>

            <div>
              <p className="text-foreground/40">Experience</p>
              <p className="font-medium">6+ Years</p>
            </div>

            <div>
              <p className="text-foreground/40">Focus</p>
              <p className="font-medium">React & Next.js</p>
            </div>

            <div>
              <p className="text-foreground/40">Mode</p>
              <p className="font-medium">Building in Public</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Who Am I */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
        <h2 className="text-xl font-semibold">Who Am I</h2>

        <p className="text-foreground/70 leading-7">
          Hi, I’m a frontend developer who enjoys building things on the web.
          Over the past years, I’ve worked with Vue, React, UniApp and various
          frontend ecosystems in real-world projects.
        </p>

        <p className="text-foreground/70 leading-7">
          I believe the best way to grow is by building, experimenting, and
          sharing what I learn. This site is a personal lab where I collect
          notes, explore ideas, and document my learning process.
        </p>
      </div>

      {/* Journey */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Journey</h2>

        <div className="space-y-4">
          {journey.map((item) => (
            <div
              key={item.year}
              className="flex gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="w-16 shrink-0 text-[var(--accent)] font-semibold">
                {item.year}
              </div>
              <div className="text-sm text-foreground/70 leading-6">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Tech Stack</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-medium mb-3">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.core.map((item) => (
                <span
                  key={item}
                  className="text-xs rounded-full border border-white/10 bg-white/[0.04] px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-medium mb-3">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {stack.learning.map((item) => (
                <span
                  key={item}
                  className="text-xs rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="rounded-xl border border-dashed border-white/15 p-6 space-y-3">
        <h2 className="text-xl font-semibold">Current Goals</h2>

        <ul className="space-y-2 text-sm text-foreground/70">
          <li>✓ Build Personal Lab</li>
          <li>✓ Organize technical notes</li>
          <li>□ Create interactive animation demos</li>
          <li>□ Explore Three.js / WebGL</li>
          <li>□ Experiment with AI-assisted development</li>
          <li>□ Share more public learning content</li>
        </ul>
      </div>

      {/* Connect */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
        <h2 className="text-xl font-semibold">Connect</h2>

        <div className="flex flex-col gap-2 text-sm text-foreground/70">
          <Link
            href="https://github.com/lpkshuai/"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub → github.com/lpkshuai
          </Link>

          <Link
            href="https://www.cnblogs.com/lpkshuai"
            target="_blank"
            className="hover:text-white transition"
          >
            Blog → cnblogs.com/lpkshuai
          </Link>
        </div>
      </div>
    </section>
  );
}
