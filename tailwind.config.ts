import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    fontFamily: { sans: ["var(--font-plex)", "ui-monospace", "Menlo", "monospace"] },
    colors: { paper: "var(--paper)", ink: "var(--ink)", muted: "var(--muted)", rule: "var(--rule)" },
  } },
} satisfies Config;
