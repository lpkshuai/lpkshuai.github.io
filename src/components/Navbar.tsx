"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

import { useDictionary } from "@/hooks/useDictionary";

export default function Navbar() {
  const dict = useDictionary();

  const navItems = [
    {
      href: "/",
      label: dict.nav.home,
    },
    {
      href: "/notes",
      label: dict.nav.notes,
    },
    {
      href: "/lab",
      label: dict.nav.lab,
    },
    {
      href: "/projects",
      label: dict.nav.projects,
    },
    {
      href: "/about",
      label: dict.nav.about,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="text-sm font-bold tracking-[0.2em]">
          PERSONAL LAB
        </Link>

        <div className="flex items-center gap-4">
          <nav
            className="w-full overflow-x-auto sm:w-auto sm:overflow-visible"
            aria-label="Primary navigation"
          >
            <ul className="flex min-w-max gap-1 text-sm text-foreground/70 sm:min-w-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-foreground active:scale-95"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
