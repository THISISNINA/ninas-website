import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap() {
  return ["", "/about", ...site.projects.map((p) => `/projects/${p.slug}`)].map((p) => ({ url: `${site.url}${p}/` }));
}
