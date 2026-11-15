const strokes = [
  { d: "M4 34C8 31 11 24 13 17c1-3 3-2 2 2l-3 17c3-10 8-20 14-20 5 0 3 7 2 12-1 5 0 9 5 8 4-1 7-6 9-12 1-3 2-5 2-7-2 7-3 14-2 17 1 3 5 3 9-1 3-3 5-9 7-16-2 7-4 13-5 19 3-9 8-20 14-20 5 0 3 7 2 12-1 5 0 9 5 8 4-1 7-6 10-12 3-6 10-9 15-7-7-4-15 3-15 11 0 8 8 9 13 2 2-4 3-9 4-13-1 7-3 16 0 19 3 2 9-2 13-8", delay: "0s", time: "2.2s" },
  { d: "M46 8l.8.8", delay: "2.2s", time: "0.15s" },
];
export default function Logo() {
  return (
    <svg viewBox="0 0 118 44" className="pencil pen-logo h-10 w-auto" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {strokes.map((s) => <path key={s.d} d={s.d} pathLength={1} style={{ "--d": s.delay, "--t": s.time } as React.CSSProperties} />)}
    </svg>
  );
}
