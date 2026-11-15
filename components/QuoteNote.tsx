"use client";
import { useEffect, useRef, useState } from "react";
import { StickyNote } from "./HeroBits";
export default function QuoteNote({ quotes }: { quotes: string[][] }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  useEffect(() => {
    if (quotes.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { if (!paused.current) setActive((n) => (n + 1) % quotes.length); }, 8000);
    return () => clearInterval(t);
  }, [quotes.length]);
  const hold = (v: boolean) => () => { paused.current = v; };
  return (
    <div className="relative" onMouseEnter={hold(true)} onMouseLeave={hold(false)} onFocus={hold(true)} onBlur={hold(false)}>
      <StickyNote tilt="rotate-[3deg]" tint="bg-[#cfe6f5]" clip={false}>
        <button type="button" aria-label="Show the next quote" onClick={() => setActive((n) => (n + 1) % quotes.length)} className="flex w-full flex-col text-left">
          <span className="grid">
            {quotes.map(([q, by], i) => (
              <span key={q} aria-hidden={i !== active} className={`col-start-1 row-start-1 block transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}>
                {q}{by && <span className="mt-3 block">- {by}</span>}
              </span>
            ))}
          </span>
          {quotes.length > 1 && <span aria-hidden="true" className="mt-2 block self-end text-lg text-[#55524a]">next &rarr;</span>}
        </button>
      </StickyNote>    </div>
  );
}
