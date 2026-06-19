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
    <header className="flex items-center justify-between px-20 my-10">
      <Link href="/" className="font-bold text-lg">
        PERSONAL LAB
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
