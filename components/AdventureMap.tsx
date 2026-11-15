import { site } from "@/lib/site";
type Kind = "school" | "work" | "cert";
type Stop = { id: string; kind: Kind; from?: string; to?: string; now?: boolean; title: string; place: string; blurb?: string };
const label: Record<Kind, string> = { school: "school", work: "job", cert: "certificate" };

const fmt = (d?: string) => !d ? "" : d.length === 4 ? d : new Date(`${d}-01T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
const when = (s: Stop) => s.now ? `${fmt(s.from)} – now` : s.to && s.from ? `${fmt(s.from)} – ${fmt(s.to)}` : fmt(s.to ?? s.from);

function stops(): Stop[] {
  const all: Stop[] = [
    ...site.education.map((e) => ({ id: e.degree, kind: "school" as const, to: e.year, title: e.degree, place: e.school })),
    ...site.experience.map((e) => ({ id: e.id, kind: "work" as const, from: e.start_date, to: e.end_date, now: e.currently_working, title: e.role, place: e.company, blurb: e.blurb })),
    ...site.certifications.map((c) => ({ id: c.id, kind: "cert" as const, to: c.date || undefined, title: c.title, place: c.provider })),
  ];
  const key = (s: Stop) => s.from ?? s.to ?? "9999";
  return all.sort((a, b) => key(a).localeCompare(key(b)));
}

const Icon = ({ kind }: { kind: Kind }) => (
  <svg aria-hidden="true" viewBox="0 0 32 32" className="pencil h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {kind === "school" && <><path d="M3 12l13-6 13 6-13 6z" /><path d="M9 15v6c4 3 10 3 14 0v-6" /><path d="M27 13v7" /></>}
    {kind === "work" && <><path d="M5 11h22v14H5z" /><path d="M12 11V8h8v3" /><path d="M5 17h22" /></>}
    {kind === "cert" && <><circle cx="16" cy="12" r="6" /><path d="M12 17l-2 10 4-3 2 3" /><path d="M20 17l2 10-4-3" /></>}
  </svg>
);

export default function AdventureMap() {
  const list = stops();
  return (
    <div>
      <p className="hand -rotate-2 text-2xl text-[#c8352b] md:text-center">start here ✕</p>
      <ol className="mt-2">
        {list.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <li key={s.id} className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)]">
              <div aria-hidden="true" className="relative flex justify-center md:col-start-2 md:row-start-1">
                <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="pencil absolute inset-0 h-full w-full text-muted" fill="none" stroke="currentColor" strokeLinecap="round">
                  <path vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeDasharray="5 7" d={right ? "M20 0C36 30 4 65 20 100" : "M20 0C4 30 36 65 20 100"} />
                </svg>
                <span className={`relative mt-3 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-paper ${s.now ? "border-[#c8352b] text-[#c8352b]" : "border-ink text-ink"}`}><Icon kind={s.kind} /></span>
              </div>
              <div className={`min-w-0 pb-12 pl-3 md:row-start-1 md:px-4 ${right ? "md:col-start-3" : "md:col-start-1 md:text-right"}`}>
                <p className="hand text-2xl leading-none text-[#c8352b]">{when(s) || "date to come"}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted">{label[s.kind]}{s.now && <span className="hand ml-2 inline-block -rotate-2 text-lg normal-case tracking-normal text-[#c8352b]">you are here!</span>}</p>
                <h3 className="mt-1 text-base font-medium text-ink">{s.title}</h3>
                <p className="text-muted">↳ {s.place}</p>
                {s.blurb && <p className={`mt-2 max-w-md text-muted ${right ? "" : "md:ml-auto"}`}>{s.blurb}</p>}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="hand rotate-1 text-2xl text-muted md:text-center">to be continued…</p>
    </div>
  );
}
