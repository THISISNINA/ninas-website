const line = { stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
const P = ({ d, w }: { d: string; w?: number }) => <path {...line} strokeWidth={w ?? 1.4} d={d} />;
const art = {
  cat: { box: "0 0 92 100", body: <>
    <P d="M30 31C28 22 27 14 29 7c4 4 8 9 11 12 6-2 12-2 18 0 4-4 8-8 12-12 2 8 2 16 0 24 4 10 0 21-12 24-10 3-22 2-28-3-6-5-5-15 0-21" />
    <P d="M40 37c2-3 4-3 6 0M54 37c2-3 4-3 6 0" w={1.8} /><P d="M48 43l2 2 3-2M50 45c0 3-3 4-5 2M50 45c1 3 4 4 6 2" />
    <P d="M28 41L13 38M28 46L12 48M72 40l15-3M72 46l16 2" w={0.9} /><P d="M32 12l5 8M67 12l-5 8" w={0.8} />
    <P d="M34 56c-10 10-14 26-10 38l46 1c6-13 2-29-8-40" /><P d="M70 92c14 2 20-8 14-18-4-4-8 0-6 4" />
    <P d="M42 94c0-10 2-16 3-20M54 94c0-10-2-16-3-20" /><P d="M28 70l9 16M26 78l7 12M64 68l5 14M60 76l6 14" w={0.8} />
  </> },
  coffee: { box: "0 0 80 80", body: <>
    <P d="M14 30c0 14 2 30 8 38 8 4 22 4 30 0 6-8 8-24 8-39" /><P d="M13 30c7-7 41-8 48-2-5 8-41 9-48 2z" /><P d="M60 38c14-4 16 16-3 18" />
    <P d="M28 18c-6-6 6-10 0-16M44 18c-6-6 6-10 0-16" w={1} /><P d="M20 46l6 16M26 44l6 20M32 44l4 22M19 38l26 3" w={0.8} />
  </> },
  ring: { box: "0 0 100 100", body: <>
    <P d="M50 6c30 0 44 24 42 48-2 26-26 40-48 38C20 90 6 70 8 46 10 22 28 8 46 6" w={2.6} /><P d="M52 13c22 2 34 20 32 38M16 62c6 16 22 24 38 22" w={1.2} /><P d="M90 62c4 6 4 10 1 11M12 28c-5 0-6-3-4-5" w={1.8} />
  </> },
  heart: { box: "0 0 64 64", body: <>
    <P d="M32 56C10 42 4 28 12 18c6-7 16-4 20 6 4-11 15-14 21-6 7 10-1 26-21 38" /><P d="M31 53C13 40 8 28 14 20M50 16c7 6 4 20-6 30" w={0.9} />
    <P d="M38 46l11-14M34 50l18-23M42 47l10-12" w={0.8} />
  </> },
  plane: { box: "0 0 200 90", body: <>
    <P d="M196 10l-46 24 14 8 32-32-32 32 4 18 8-14" /><path {...line} strokeWidth={1.1} strokeDasharray="5 6" d="M146 40c-26 16-42-10-58 4-12 12 4 26 16 16 12-12-14-30-42-8-18 14-40 10-56 20" />
  </> },
  magnifier: { box: "0 0 80 80", body: <>
    <P d="M30 6c18-2 30 12 26 30-4 18-26 24-40 12C4 36 8 12 32 5" /><P d="M27 9c17-1 29 11 26 26" w={0.9} /><P d="M50 50l24 24M56 46l22 24M74 74l4-4" /><P d="M20 26l12-14M22 36l20-24M30 40l16-18" w={0.8} />
  </> },
  sparks: { box: "0 0 70 70", body: <><P d="M20 8v22M9 19h22M12 11l16 16M28 11L12 27" /><P d="M52 30v14M45 37h14" w={1.1} /><P d="M30 52v10M25 57h10" w={0.9} /></> },
  underloop: { box: "0 0 300 20", stretch: true, body: <P d="M2 9c60-6 130-8 200-4 40 2 90 3 96 6-40 5-140 2-210 8" w={1.2} /> },
  circled: { box: "0 0 200 90", stretch: true, body: <P d="M34 10C90-2 180 6 192 36c10 30-50 50-110 48C30 82-4 66 6 38 14 16 60 6 130 6" w={1.3} /> },
};
export function Cute({ kind, className = "", red }: { kind: keyof typeof art; className?: string; red?: boolean }) {
  const a = art[kind] as { box: string; body: React.ReactNode; stretch?: boolean };
  return <svg aria-hidden="true" viewBox={a.box} preserveAspectRatio={a.stretch ? "none" : undefined} className={`sketch ${red ? "text-[#c8352b]" : "text-[#3a372f] dark:text-ink"} ${className}`}>{!a.stretch && <g opacity="0.35" transform="translate(1.3 -0.9) rotate(1.3 32 32)">{a.body}</g>}{a.body}</svg>;
}
export const PencilDefs = () => (
  <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      {[["pencil", "2", "1.8", "0.035"], ["pencil-dark", "2.5", "1.8", "0.035"], ["sketch", "1.9", "3.4", "0.02"], ["sketch-dark", "2.45", "3.4", "0.02"]].map(([id, solid, scale, freq]) => (
        <filter key={id} id={id} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" seed="4" result="wobble" />
          <feDisplacementMap in="SourceGraphic" in2="wobble" scale={scale} xChannelSelector="R" yChannelSelector="G" result="drawn" />
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="9" result="grain" />
          <feColorMatrix in="grain" type="matrix" values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.4 ${solid}`} result="holes" />
          <feComposite in="drawn" in2="holes" operator="in" />
        </filter>
      ))}
    </defs>
  </svg>
);
