"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Shadow, Tape } from "./HeroBits";
type Item = { href: string; title: string; image?: string; link?: string };
const shapes = [
  { phone: "w-[13rem]", wide: "sm:w-[18rem]", ratio: "aspect-[4/3]", tilt: "-rotate-2", shift: "mt-0", share: 1.12 },
  { phone: "w-[10rem]", wide: "sm:w-[13rem]", ratio: "aspect-[3/4]", tilt: "rotate-3", shift: "mt-8", share: 0.86 },
  { phone: "w-[11.5rem]", wide: "sm:w-[15rem]", ratio: "aspect-square", tilt: "-rotate-1", shift: "mt-2", share: 1 },
  { phone: "w-[13rem]", wide: "sm:w-[17.5rem]", ratio: "aspect-[16/10]", tilt: "rotate-2", shift: "mt-6", share: 1.06 },
  { phone: "w-[10.5rem]", wide: "sm:w-[14.5rem]", ratio: "aspect-[5/4]", tilt: "-rotate-3", shift: "mt-10", share: 0.9 },
];
const Arrow = ({ flip }: { flip?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 44 24" className={`sketch h-6 w-11 ${flip ? "-scale-x-100" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 13c12-2 24 1 37-1M30 4c4 3 7 5 10 8-3 3-6 6-10 9" />
  </svg>
);
export default function ProjectStrip({ items, tape }: { items: Item[]; tape: "stripes" | "dots" }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: true });
  const update = () => {
    const el = track.current;
    if (el) setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: smooth ? "smooth" : "auto" });
  };
  const spread = items.length <= 4;
  const total = Math.min(100 - (items.length - 1) * 5, items.length * 34);
  const shareSum = items.reduce((sum, _, j) => sum + shapes[j % shapes.length].share, 0);
  return (
    <div>
      <ul ref={track} onScroll={update} className={`-mx-4 flex snap-x snap-proximity items-start gap-6 overflow-x-auto px-4 pb-8 pt-8 [scrollbar-width:none] sm:gap-10 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 [&::-webkit-scrollbar]:hidden ${spread ? "sm:justify-around" : ""}`}>
        {items.map((p, j) => {
          const s = shapes[j % shapes.length];
          const width = `${(total * s.share) / shareSum}%`;
          return (
            <li key={p.href} style={{ "--w": width } as React.CSSProperties} className={`shrink-0 snap-start ${s.phone} ${spread ? "sm:w-[var(--w)] sm:max-w-[28rem]" : s.wide} ${s.shift}`}>
              <Link href={p.href} className={`group relative block transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none ${s.tilt}`}>
                <Shadow />
                <span className="relative block bg-white p-2 pb-2.5">
                  {j % 2 === 0 && <Tape kind={tape} className="-top-3 left-1/2 z-10 h-5 w-14 -translate-x-1/2 rotate-3" />}
                  <span className={`relative block overflow-hidden bg-[#ece8df] ${s.ratio}`}>
                    {p.image ? <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover object-left-top" />
                      : <><span aria-hidden="true" className="tone-flat absolute inset-0 opacity-25 [--ink:#23211d]" /><span aria-hidden="true" className="hand absolute inset-0 flex items-center justify-center text-lg text-[#66625a]">photo</span></>}
                  </span>
                  <span className="hand mt-1.5 block text-center text-lg leading-tight text-[#2b2820] underline-offset-4 group-hover:underline">{p.title}</span>
                </span>
              </Link>
              {p.link && <a href={p.link} className="hand mt-3 block text-center text-lg text-[#c8352b] underline-offset-4 hover:underline">visit the live site ↗</a>}
            </li>
          );
        })}
      </ul>
      {!(edge.start && edge.end) && (
        <div className="flex items-center justify-center gap-10">
          <button type="button" aria-label="Scroll back" disabled={edge.start} onClick={() => go(-1)} className="p-2 transition-opacity hover:opacity-70 disabled:opacity-25"><Arrow flip /></button>
          <button type="button" aria-label="Scroll forward" disabled={edge.end} onClick={() => go(1)} className="p-2 transition-opacity hover:opacity-70 disabled:opacity-25"><Arrow /></button>
        </div>
      )}
    </div>
  );
}
