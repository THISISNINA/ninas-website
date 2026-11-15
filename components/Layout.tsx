import Link from "next/link";
import { projectCategories, site } from "@/lib/site";
import NavLinks, { type NavItem } from "./NavLinks";
import Logo from "./Logo";
import { InlineScribble, StickyNote } from "./HeroBits";
import { GhostTitle, PencilButton, SectionRule } from "./Sketch";
import { Cute } from "./Cute";
const links: NavItem[] = [
  { label: "Projects", href: `/#${projectCategories[0].id}`, children: projectCategories.map((c) => ({ label: c.title, href: `/#${c.id}` })) },
  { label: "About me", href: "/about" },
  { label: "Let's connect", href: "/#connect" },
];
export function Nav() {
  return (
    <header className="frame print:hidden flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5">
      <Link href="/" aria-label={`${site.name}, home`} className="flex items-center">
        <Logo />
      </Link>
      <NavLinks links={links} />
    </header>
  );
}
export function Footer() {
  return (
    <footer id="connect" className="print:hidden relative">
      <SectionRule />
      <div aria-hidden="true" className="tone-sheet cut-torn absolute inset-x-0 bottom-0 h-20 md:h-24" />
      <div className="frame relative pb-36 pt-12 md:pt-16">
        <Cute kind="plane" className="absolute right-4 top-14 hidden w-48 -rotate-3 md:block lg:right-12 lg:w-60" />
        <GhostTitle>Let&apos;s connect</GhostTitle>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="max-w-md text-base leading-7 text-muted">Get in touch</p>
            <div className="mt-5"><PencilButton href={site.linkedin}>LinkedIn ↗</PencilButton></div>
            <InlineScribble text={site.scribbles.connect} tilt="rotate-1" />
          </div>
          {site.sideNotes[2] && <div className="flex items-end gap-6 md:mr-8 md:mt-16"><div className="w-36"><StickyNote tint="bg-[#fff1a8]" tilt="-rotate-[4deg]" clip={false}>{site.sideNotes[2]}</StickyNote></div><Cute kind="heart" className="w-12 rotate-6" /></div>}
        </div>
      </div>
    </footer>
  );
}
