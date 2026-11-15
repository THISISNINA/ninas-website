import { projectCategories, site } from "@/lib/site";
import ProjectStrip from "./ProjectStrip";
import { GhostTitle } from "./Sketch";
export const projectGroups = () => projectCategories.map((c) => ({
  ...c,
  items: site.projects.filter((p) => p.category === c.title).map((p) => ({ href: `/projects/${p.slug}`, title: p.title, image: p.image, link: p.link })),
}));
type Group = ReturnType<typeof projectGroups>[number];
export function ProjectBoard({ group, tape, note, aside }: { group: Group; tape: "stripes" | "dots"; note?: React.ReactNode; aside?: React.ReactNode }) {
  const n = group.items.length;
  return (
    <div className="relative">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
          <GhostTitle mark={group.id === "data" ? "circled" : "underloop"}>{group.title}</GhostTitle>
          {n > 0 && <p className="hand mb-1 -rotate-3 text-xl text-[#c8352b]">{n} {n === 1 ? "project" : "projects"}</p>}
        </div>
        {aside && <div aria-hidden="true" className="hidden shrink-0 items-start gap-3 lg:flex">{aside}</div>}
      </div>
      <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_9.5rem] lg:items-start lg:gap-8">
        <div className="min-w-0">{n ? <ProjectStrip items={group.items} tape={tape} /> : <p className="hand mt-6 text-2xl text-muted">coming soon</p>}</div>
        {note && <div className="ml-auto mt-4 w-28 sm:w-36 lg:ml-0 lg:mt-20 lg:w-full">{note}</div>}
      </div>
    </div>
  );
}
