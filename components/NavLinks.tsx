"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
export default function NavLinks({ links }: { links: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  const cls = (h: string) => `nav ${path === h ? "!text-ink" : ""}`;
  return (
    <>
      <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
        {links.map((l) => (
          <div key={l.href} className="group relative">
            <Link href={l.href} aria-current={path === l.href ? "page" : undefined} className={cls(l.href)}>{l.label}{l.children && <span aria-hidden="true"> ▾</span>}</Link>
            {l.children && <div className="invisible absolute left-0 top-full z-30 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="card flex flex-col gap-2 whitespace-nowrap px-4 py-3">{l.children.map((c) => <Link key={c.href} href={c.href} className="nav">{c.label}</Link>)}</div>
            </div>}
          </div>
        ))}
        <ThemeToggle />
      </nav>
      <div className="flex items-center gap-3 md:hidden"><ThemeToggle /><button className="nav" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button></div>
      {open && <nav id="mobile-menu" aria-label="Main" onClick={() => setOpen(false)} className="flex w-full flex-col gap-3 border-t border-rule py-4 md:hidden">
        {links.map((l) => <div key={l.href} className="flex flex-col gap-3"><Link href={l.href} className={cls(l.href)}>{l.label}</Link>{l.children?.map((c) => <Link key={c.href} href={c.href} className="nav pl-4">↳ {c.label}</Link>)}</div>)}
      </nav>}
    </>
  );
}
