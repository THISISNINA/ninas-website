"use client";
export default function ThemeToggle() {
  return <button className="text-lg leading-none" aria-label="Toggle dark mode" onClick={() => { const d = document.documentElement.classList.toggle("dark"); try { localStorage.theme = d ? "dark" : "light"; } catch {} }}>◐</button>;
}
