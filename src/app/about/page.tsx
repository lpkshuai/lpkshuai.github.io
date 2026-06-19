const techStack = [
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
];

const learningTopics = [
  "React",
  "Next.js",
  "TypeScript",
  "Frontend Architecture",
  "Interactive Experiences",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 space-y-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-4 max-w-3xl text-lg text-foreground/70">
          Frontend Developer focused on building interactive web experiences and
          continuous learning.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-foreground/70">
          Currently exploring React, Next.js, TypeScript and modern frontend
          architecture.
        </p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-3">
          {techStack.map((item) => (
            <li key={item} className="rounded-full border px-3 py-1 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Currently Learning</h2>
        <ul className="mt-4 space-y-2">
          {learningTopics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Connect</h2>
        <ul>
          <li>
            <a
              href="https://github.com/lpkshuai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://lpkshuai@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
