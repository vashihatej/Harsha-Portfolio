/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "next-themes";

export default function IntroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <section className="hero-section">
      <div className="port-container" style={{ width: "100%" }}>
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-left reveal-left">
            <div className="hero-badge">
              <div className="badge-pulse" />
              Cloud · AI · Platform Engineering
            </div>
            <h1 className="hero-name">
              Harsha<br />
              <span className="grad">Masandrapalya<br />Vanarajaiah</span>
            </h1>
            <p className="hero-role">
              <strong>Senior Software Engineer</strong> · Strategy &nbsp;·&nbsp; Tysons, VA
            </p>
            <p className="hero-desc">
              Cloud-native architect building enterprise Kubernetes platforms and AI systems at scale.
              Multi-cloud infrastructure (AWS · Azure · GCP) · AI/RAG pipelines · 100+ enterprise customers.
            </p>
            <div className="hero-actions">
              <a href="/assets/documents/Harsha_Masadrapalya_Resume.pdf" target="_blank" className="btn-primary">
                ⬇ View Resume
              </a>
              <a href="/templates/template-cyber-about.html" target="_blank" className="btn-ghost">
                ⚡ About Me
              </a>
              <a href="https://www.linkedin.com/in/harshamasandrapalyavanarajaiah/" target="_blank" className="btn-ghost">
                ↗ LinkedIn
              </a>
            </div>
            <div className="hero-socials">
              <a href="mailto:harshamasandr@gmail.com" className="social-pill">✉ harshamasandr@gmail.com</a>
              <a href="https://github.com/vashihatej" target="_blank" className="social-pill">⌥ github.com/vashihatej</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className="photo-glow" />
              <div className="photo-wrap">
                <img
                  src={isDark ? "/assets/images/MyPicDarkMode.jpeg" : "/assets/images/MyPic.jpeg"}
                  alt="Harsha MV"
                  className="photo-img"
                />
              </div>
            </div>

            <div className="mini-stats reveal-scale">
              <div className="mini-stat">
                <div className="mini-stat-num">5+</div>
                <div className="mini-stat-label">Years Exp</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-num">100+</div>
                <div className="mini-stat-label">Enterprise Customers</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-num">3–4×</div>
                <div className="mini-stat-label">AI Dev Velocity</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-num">3.92</div>
                <div className="mini-stat-label">MS GPA · GMU</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
