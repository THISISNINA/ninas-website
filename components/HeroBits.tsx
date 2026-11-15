export const Shadow = () => <span aria-hidden="true" className="tone-flat absolute inset-0 translate-x-1.5 translate-y-1.5 opacity-70" />;
const playful = "transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none";
export function Tape({ kind, className }: { kind: "stripes" | "dots"; className: string }) {
  const color = kind === "stripes" ? "#c9607d" : "#4f8fbd";
  return (
    <svg aria-hidden="true" viewBox="0 0 80 24" preserveAspectRatio="none" className={`absolute ${className}`} fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" fill={kind === "stripes" ? "#fbe3ea" : "#dbebf6"} d="M4 2h72l-3 4 4 4-4 4 4 4-3 4H4l3-4-4-4 4-4-4-4z" />
      <g className="pencil">
        <path d="M4 2h72l-3 4 4 4-4 4 4 4-3 4H4l3-4-4-4 4-4-4-4z" />
        {kind === "stripes" ? [12, 20, 28, 36, 44, 52, 60, 68].map((x) => <path key={x} d={`M${x} 21l6-18`} />) : [14, 26, 38, 50, 62].flatMap((x) => [<circle key={x} cx={x} cy="8" r="1.7" />, <circle key={x + 6} cx={x + 6} cy="16" r="1.7" />])}
      </g>
    </svg>
  );
}
export function StickyNote({ children, tilt = "-rotate-[4deg]", tint = "bg-[#fff1a8]", clip = true }: { children: React.ReactNode; tilt?: string; tint?: string; clip?: boolean }) {
  return (
    <div className={`relative w-full ${playful} ${tilt}`}>
      <Shadow />
      <aside aria-label="Note" className={`relative px-3 pb-4 pt-6 text-[#2b2820] sm:px-4 ${tint}`}>
        {clip ? <svg aria-hidden="true" viewBox="0 0 24 56" className="pencil absolute -top-4 right-5 h-12 w-5 text-[#3a372f] dark:text-[#8f8a80]" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M18 14v30a6 6 0 0 1-12 0V10a4 4 0 0 1 8 0v30a2 2 0 0 1-4 0V16" />
        </svg> : <Tape kind="stripes" className="-top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2" />}
        <div className="hand whitespace-pre-line text-[1.4rem] leading-[1.15]">{children}</div>
      </aside>
    </div>
  );
}
const pen = (d: string, delay: string, time: string) => <path key={d} d={d} pathLength={1} style={{ "--d": delay, "--t": time } as React.CSSProperties} />;
const doodle = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;
export const Star = () => <svg aria-hidden="true" viewBox="0 0 24 24" strokeWidth="1.8" {...doodle} className="pencil pen-logo absolute left-full top-[0.1em] ml-[0.1em] h-[0.34em] w-[0.34em] -rotate-12 text-[#c8352b]">{pen("M12 3l3.5 17L3 8.5h18L7 21z", "0.5s", "0.8s")}</svg>;
export const Squiggle = () => <svg aria-hidden="true" viewBox="0 0 150 10" preserveAspectRatio="none" strokeWidth="1.6" {...doodle} className="pencil pen-logo absolute -bottom-1.5 left-0 h-2 w-full text-[#c8352b]">{pen("M2 6c20-6 30 6 50 1s30-6 50 0 30 5 46-1", "1.2s", "0.7s")}</svg>;
export function ThatsMe() {
  return (
    <div aria-hidden="true" className="absolute bottom-[12%] right-full mr-2 hidden w-28 lg:block">
      <span className="hand block -rotate-6 text-right text-2xl">that&apos;s me!</span>
      <svg viewBox="0 0 90 40" strokeWidth="2" {...doodle} className="pencil pen-logo ml-auto h-9 w-24 text-[#c8352b]">{[pen("M4 6C20 34 56 38 84 18", "1.6s", "0.6s"), pen("M84 18l-11-1", "2.2s", "0.12s"), pen("M84 18l-5 10", "2.3s", "0.12s")]}</svg>
    </div>
  );
}
export function Pencilled({ text, strike = "text-[#c8352b]" }: { text: string; strike?: string }) {
  return <>{text.split(/~~(.+?)~~/).map((part, i) => i % 2 === 0 ? part : (
    <span key={i} className="relative inline-block whitespace-nowrap">{part}
      <svg aria-hidden="true" viewBox="0 0 60 8" preserveAspectRatio="none" className={`pencil absolute -left-[4%] top-[42%] h-[0.3em] w-[108%] ${strike}`} fill="none" stroke="currentColor" strokeLinecap="round">
        <path vectorEffect="non-scaling-stroke" strokeWidth="1.5" d="M1 5.5C14 3 30 5 44 3.5s12-1 15-1" />
      </svg>
    </span>
  ))}</>;
}
export const InlineScribble = ({ text, tilt = "-rotate-2" }: { text?: string; tilt?: string }) => text ? <p aria-hidden="true" className={`hand mt-6 w-fit text-[1.5rem] leading-tight text-[#c8352b] ${tilt}`}><Pencilled text={text} strike="text-ink" /></p> : null;
export function CaseFile({ name }: { name: string }) {
  const rows = [["Subject", name.split(" ")[0]], ["Risk rating", "Low"], ["Status", "Reviewed twice"]];
  return (
    <div className={`relative w-full -rotate-[2.5deg] ${playful}`}>
      <Shadow />
      <div className="relative overflow-hidden bg-[#fffdf7] px-4 pb-14 pt-3 font-sans text-xs leading-5 text-[#2b2820] lg:text-[clamp(0.75rem,0.95vw,1.05rem)] lg:leading-[1.7]">
        <p className="border-b-2 border-[#c8352b] pb-1 font-bold tracking-wide">CASE FILE No. 001</p>
        <dl className="mt-1">{rows.map(([k, v]) => <div key={k} className="flex justify-between gap-3 border-b border-[#cfd9e6] py-1"><dt className="text-[#66625a]">{k}</dt><dd>{v}</dd></div>)}</dl>
        <p className="pencil stamp absolute bottom-2 right-3 -rotate-[14deg] border-[3px] border-double border-[#c8352b] px-2 py-0.5 text-base font-bold tracking-widest text-[#c8352b]">CLEARED</p>
      </div>
    </div>
  );
}
export function Polaroid({ src, name }: { src: string | null; name: string }) {
  return (
    <div className={`relative w-full max-w-[12rem] rotate-[4deg] sm:max-w-none ${playful}`}>
      <Shadow />
      <figure className="relative bg-white p-2 pb-0.5 sm:p-2.5 sm:pb-1">
        <Tape kind="dots" className="-top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 sm:w-24" />
        {src ? <img src={src} alt={`Portrait of ${name}`} className="aspect-square w-full object-cover" />
          : <div className="relative flex aspect-square w-full items-center justify-center bg-[#ece8df] text-[#23211d]"><span aria-hidden="true" className="absolute inset-0 opacity-30 [--ink:#23211d] tone-flat" /><span className="hand relative bg-[#ece8df] px-2 text-center text-xl">photo coming soon</span></div>}
        <figcaption className="hand py-1 text-center text-xl text-[#2b2820] sm:py-1.5">hi, I&apos;m {name.split(" ")[0]}</figcaption>
      </figure>
    </div>
  );
}
