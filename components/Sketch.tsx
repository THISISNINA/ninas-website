import { Cute } from "./Cute";
export const PencilRule = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 1200 12" preserveAspectRatio="none" className={`pencil block h-3 w-full text-muted opacity-60 ${className}`} fill="none" stroke="currentColor" strokeLinecap="round">
    <path vectorEffect="non-scaling-stroke" strokeWidth="1.3" d="M2 7C150 4 300 9 450 6s300-4 450 1 250-2 296-1" />
    <path vectorEffect="non-scaling-stroke" strokeWidth="0.8" opacity="0.5" d="M30 8C210 6 390 9 610 7s400-3 560 0" />
  </svg>
);
export const SectionRule = () => <div aria-hidden="true" className="frame absolute inset-x-0 top-0"><PencilRule /></div>;
export function GhostTitle({ as: H = "h2", children, mark = "underloop", className = "" }: { as?: "h1" | "h2"; children: React.ReactNode; mark?: "underloop" | "circled"; className?: string }) {
  return (
    <H className={`ghost text-[9vw] md:text-6xl ${className}`}>
      <span className="relative inline-block whitespace-nowrap"><span aria-hidden="true" className="tone-sheet cut-b absolute -left-[3%] -right-[6%] bottom-[2%] h-[48%] -rotate-1" /><span className="relative">{children}</span>{mark === "circled" ? <Cute kind="circled" red className="absolute -left-[8%] -top-[12%] h-[125%] w-[116%]" /> : <Cute kind="underloop" red className="absolute -bottom-2 left-0 h-3 w-full" />}</span>
    </H>
  );
}
export function PencilButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm">
      <span aria-hidden="true" className="absolute inset-1 bg-[var(--wash)] opacity-0 transition-opacity group-hover:opacity-100" />
      <svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" className="pencil absolute inset-0 h-full w-full text-ink" fill="none" stroke="currentColor" strokeLinejoin="round">
        <path vectorEffect="non-scaling-stroke" strokeWidth="1.3" d="M3 6C30 3 70 4 97 5c1 10 1 20-1 30-30 2-62 1-93 0C2 25 2 15 3 6z" />
        <path vectorEffect="non-scaling-stroke" strokeWidth="0.7" opacity="0.5" d="M5 4c28 0 60 2 93 3" />
      </svg>
      <span className="relative">{children}</span>
    </a>
  );
}
export const Tag = ({ children, i = 0 }: { children: React.ReactNode; i?: number }) => (
  <span className={`hand inline-block bg-[var(--wash)] px-2.5 py-0.5 text-lg leading-snug text-ink ${["-rotate-1", "rotate-1", "-rotate-2", "rotate-0"][i % 4]}`}>{children}</span>
);
