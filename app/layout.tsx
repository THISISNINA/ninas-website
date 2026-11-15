import type { Metadata } from "next";
import { IBM_Plex_Mono, La_Belle_Aurore, Reenie_Beanie } from "next/font/google";
import { site } from "@/lib/site";
import { Nav, Footer } from "@/components/Layout";
import { PencilDefs } from "@/components/Cute";
import "./globals.css";
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-plex", display: "swap" });
const signature = La_Belle_Aurore({ subsets: ["latin"], weight: "400", variable: "--font-sig", display: "swap" });
const hand = Reenie_Beanie({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });
const full = `${site.name} | ${site.title}`;
// GitHub Pages can't set headers, so the CSP goes in a meta tag.
const dev = process.env.NODE_ENV !== "production";
const csp = ["default-src 'self'", `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`, "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:", "font-src 'self'", `connect-src 'self'${dev ? " ws: wss:" : ""}`, "form-action 'self'", "base-uri 'self'", "object-src 'none'", ...(dev ? [] : ["upgrade-insecure-requests"])].join("; ");
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: full, template: `%s | ${site.name}` }, description: site.summary, openGraph: { title: full, description: site.summary, type: "website" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plex.variable} ${signature.variable} ${hand.variable}`} suppressHydrationWarning>
      <head><meta httpEquiv="Content-Security-Policy" content={csp} /><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.theme==='dark'||(!localStorage.theme&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} /></head>
      <body className="bg-paper font-sans text-sm leading-6 text-ink antialiased">
        <PencilDefs />
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Nav /><main id="main">{children}</main><Footer />
      </body>
    </html>
  );
}
