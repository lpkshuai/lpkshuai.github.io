import Link from "next/link";

const techStack = ["React", "Next.js", "TypeScript"];

const cardStack = [
  {
    label: "Notes",
    desc: "Learning...",
    href: "/notes",
  },
  {
    label: "Lab",
    desc: "Experiments",
    href: "/lab",
  },
  {
    label: "About",
    desc: "Background",
    href: "/about",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-8 px-6">
      <div>
        <p>✦ Personal Developer Lab</p>
      </div>
      <div>
        <h1 className="text-5xl font-bold tracking-tight">PERSONAL LAB</h1>
        <p className="max-w-2xl text-lg text-foreground/70">
          Building a personal lab for frontend engineering, interactive
          experiences and continuous learning.
        </p>
      </div>
      <div className="flex gap-3">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/notes">Explore Notes</Link>
        <Link href="/lab">Enter Lab</Link>
      </div>
      <div>
        <ul className="flex gap-10">
          {cardStack.map((item) => {
            return (
              <Link href={item.href} key={item.label}>
                <li className="border-gray-100 border p-4">
                  <span>{item.label}</span>
                  <p>{item.desc}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
