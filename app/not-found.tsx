import Link from "next/link";
import { Cute } from "@/components/Cute";
import { GhostTitle } from "@/components/Sketch";
export default function NotFound() {
  return (
    <div className="frame relative py-16 md:py-24">
      <GhostTitle as="h1" mark="circled">404</GhostTitle>
      <p className="mt-8 text-base text-muted">That page does not exist.</p>
      <p className="hand mt-2 -rotate-1 text-2xl text-[#c8352b]">checked twice, still not here.</p>
      <Link className="link mt-6 inline-block" href="/">Back home</Link>
      <Cute kind="magnifier" className="mt-10 w-20 rotate-12" />
    </div>
  );
}
