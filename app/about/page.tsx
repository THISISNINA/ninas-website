import { site } from "@/lib/site";
import AdventureMap from "@/components/AdventureMap";
import { Cute } from "@/components/Cute";
import { Polaroid, StickyNote } from "@/components/HeroBits";
import { GhostTitle, PencilButton, PencilRule, Tag } from "@/components/Sketch";
export const metadata = { title: "About me" };
const Part = ({ t, children }: { t: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-medium">{t}</h2>
    <PencilRule className="mb-4 mt-1" />
    <div className="text-muted">{children}</div>
  </div>
);
export default function About() {
  return (
    <div className="frame relative py-10 md:py-14">
      <GhostTitle as="h1">About me</GhostTitle>
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
        <div className="min-w-0 max-w-3xl">
          <p className="text-base leading-7">{site.tagline}</p>
          <div className="mt-6"><PencilButton href={site.linkedin}>LinkedIn ↗</PencilButton></div>
          <div className="mt-14"><Part t="My adventure map"><AdventureMap /></Part></div>
          <div className="mt-6 grid gap-12 md:grid-cols-2">
            <Part t="Regulatory experience"><div className="flex flex-wrap gap-2">{site.industries.map((x, i) => <Tag key={x} i={i}>{x}</Tag>)}</div></Part>
            <Part t="Skills & tools"><div className="flex flex-wrap gap-2">{site.skills.map((x, i) => <Tag key={x} i={i}>{x}</Tag>)}</div></Part>
          </div>
        </div>
        <aside className="relative hidden lg:block">
          <div className="sticky top-8 space-y-14">
            <Polaroid src={site.photo} name={site.name} />
            {site.sideNotes[1] && <div className="ml-6 w-40"><StickyNote tint="bg-[#d5eccd]" tilt="-rotate-[4deg]" clip={false}>{site.sideNotes[1]}</StickyNote></div>}
            <Cute kind="coffee" className="ml-auto w-16 rotate-6" />
          </div>
        </aside>
      </div>
    </div>
  );
}
