import Link from "next/link";
import { pipe, site } from "@/lib/site";
import QuoteNote from "@/components/QuoteNote";
import { Cute } from "@/components/Cute";
import { ProjectBoard, projectGroups } from "@/components/Cards";
import { SectionRule } from "@/components/Sketch";
import { CaseFile, InlineScribble, Pencilled, Polaroid, Squiggle, Star, StickyNote, ThatsMe } from "@/components/HeroBits";

export default function Home() {
  const [web, data] = projectGroups();
  const lastSpace = site.name.lastIndexOf(" ");
  const firstNames = site.name.slice(0, Math.max(lastSpace, 0)), lastName = site.name.slice(lastSpace + 1);

  return (
    <div className="home">
      <section aria-label="Introduction" className="relative py-10 md:py-14">
        <div className="relative">
          <div className="frame hero fade-in relative">
            <h1 className="hero-name signature text-[min(15.5vw,5rem)] sm:text-[10vw] lg:text-[clamp(4.5rem,5.2vw,6.2rem)]">{firstNames} <span className="relative inline-block whitespace-nowrap">{lastName}<Star /></span></h1>
            <div className="hero-text max-w-md">
              <p><span className="relative inline-block">{site.title}<Squiggle /></span></p>
              <p className="mt-2.5 text-muted">{site.tagline}</p>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2"><Link className="nav" href={`/#${web.id}`}>Projects →</Link><Link className="nav" href="/about">About me →</Link></p>
              <p aria-hidden="true" className="hand mt-6 w-fit -rotate-2 text-[1.35rem] leading-tight text-muted"><Pencilled text={site.scribbles.intro} /></p>
            </div>
            <div className="hero-photo"><span aria-hidden="true" className="tone-sheet cut-a absolute -bottom-5 left-6 right-0 top-10 sm:-right-4 -rotate-[5deg] print:hidden" /><ThatsMe /><Polaroid src={site.photo} name={site.name} /></div>
          </div>
        </div>
        <div className="frame pinboard fade-in relative mt-12 pb-6 md:mt-14">
          {site.note && <StickyNote><Pencilled text={site.note} /></StickyNote>}
          {!!site.quotes.length && <QuoteNote quotes={site.quotes.map(pipe)} />}
          <div className="pinboard-case"><CaseFile name={site.name} /></div>
          <Cute kind="ring" className="pointer-events-none absolute bottom-3 left-[33%] hidden w-28 rotate-12 opacity-30 sm:block" />
          <Cute kind="cat" className="absolute bottom-[4.2rem] left-2 w-12 sm:bottom-0 sm:left-[6%] sm:w-20 md:w-24 lg:w-[clamp(5.5rem,6.5vw,8rem)]" />
        </div>
      </section>

      <section id={web.id} aria-label={web.title} className="relative py-12 md:py-16">
        <SectionRule />
        <div className="frame"><ProjectBoard group={web} tape="stripes" aside={<><p className="hand max-w-[12rem] rotate-3 text-[1.35rem] leading-[1.05] text-[#c8352b]"><Pencilled text={site.scribbles.websites} /></p><Cute kind="magnifier" className="w-14 rotate-12" /></>} note={site.sideNotes[0] && <StickyNote tint="bg-[#f9d5e0]" tilt="rotate-[5deg]" clip={false}>{site.sideNotes[0]}</StickyNote>} /></div>
      </section>

      <section id={data.id} aria-label={data.title} className="relative py-12 md:py-16">
        <SectionRule />
        <div className="frame">
          <ProjectBoard group={data} tape="dots" aside={<><p className="hand max-w-[12rem] -rotate-2 text-[1.35rem] leading-[1.05] text-muted"><Pencilled text={site.scribbles.data} /></p><Cute kind="coffee" className="w-14 -rotate-6" /></>} note={site.sideNotes[1] && <StickyNote tint="bg-[#d5eccd]" tilt="-rotate-[4deg]" clip={false}>{site.sideNotes[1]}</StickyNote>} />
          <div className="mt-10"><InlineScribble text={site.scribbles.ps} /></div>
        </div>
      </section>
    </div>
  );
}
