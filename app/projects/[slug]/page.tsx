import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCategories, site } from "@/lib/site";
import { Cute } from "@/components/Cute";
import { Shadow, Tape } from "@/components/HeroBits";
import { PencilButton, PencilRule, Tag } from "@/components/Sketch";
const find = (slug: string) => site.projects.find((p) => p.slug === slug);
export const generateStaticParams = () => site.projects.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug);
  if (!p) notFound();
  const group = projectCategories.find((c) => c.title === p.category) ?? projectCategories[0];
  return (
    <div className="frame relative py-10 md:py-14">
      <Link href={`/#${group.id}`} className="nav">← {group.title}</Link>
      <h1 className="ghost mt-4 text-[9vw] leading-[1.05] md:text-6xl">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7">{p.summary}</p>
      <p className="hand mt-2 -rotate-1 text-xl text-[#c8352b]">{[p.category, p.year].filter(Boolean).join(" · ")}</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
        <div className="min-w-0">
          {p.image && (
            <div className="relative mb-12 -rotate-1">
              <Shadow />
              <div className="relative bg-white p-2.5">
                <Tape kind={group.id === "data" ? "dots" : "stripes"} className="-top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rotate-2" />
                <img src={p.image} alt={`${p.title} screenshot`} className="w-full" />
              </div>
            </div>
          )}
          {p.overview && <><h2 className="font-medium">Overview</h2><PencilRule className="mb-4 mt-1" /><p className="max-w-3xl whitespace-pre-line leading-7 text-muted">{p.overview}</p></>}
        </div>
        <aside className="space-y-10">
          {!!p.technologies?.length && <div><h2 className="font-medium">Tools</h2><PencilRule className="mb-4 mt-1" /><div className="flex flex-wrap gap-2">{p.technologies.map((t, i) => <Tag key={t} i={i}>{t}</Tag>)}</div></div>}
          {(p.github || p.link) && <div><h2 className="font-medium">Links</h2><PencilRule className="mb-4 mt-1" /><div className="flex flex-wrap gap-3">
            {p.github && <PencilButton href={p.github}>View on GitHub ↗</PencilButton>}
            {p.link && <PencilButton href={p.link}>Live site ↗</PencilButton>}
          </div></div>}
          <Cute kind={group.id === "data" ? "magnifier" : "sparks"} className="hidden w-16 rotate-6 lg:block" />
        </aside>
      </div>
    </div>
  );
}
