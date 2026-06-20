import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/lab", label: "Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-sm font-bold tracking-[0.2em]">
          PERSONAL LAB
        </Link>

        <nav
          className="w-full overflow-x-auto sm:w-auto sm:overflow-visible"
          aria-label="Primary navigation"
        >
          <ul className="flex min-w-max gap-1 text-sm text-foreground/70 sm:min-w-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
