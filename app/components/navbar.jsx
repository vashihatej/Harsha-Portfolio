"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

const NAV = [
  { label: "About", id: "about-me" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="port-nav">
        <div className="nav-pill">
          <span className="nav-logo">HMV</span>
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
            <button className="nav-theme-btn" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle theme" suppressHydrationWarning>
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
            <button className="nav-mobile-btn" onClick={() => setOpen(true)} aria-label="Menu">☰</button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        <button className="nav-mobile-close" onClick={() => setOpen(false)}>✕</button>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}>
            {n.label}
          </a>
        ))}
        <button className="nav-theme-btn" style={{ marginTop: "1rem" }} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} suppressHydrationWarning>
          {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </>
  );
}
