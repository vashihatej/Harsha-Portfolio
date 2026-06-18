"use client";

export default function ContactSection() {
  return (
    <section className="port-section" id="contact">
      <div className="port-container">
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">Let&apos;s <span className="acc">Connect</span></h2>
        <div className="contact-card reveal">
          <p className="contact-desc">
            I&apos;m always interested in discussing cloud architecture, AI platforms, and engineering challenges.
            Whether it&apos;s a collaboration, technical question, or just connecting — reach out.
          </p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/harshamasandrapalyavanarajaiah/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-primary"
            >
              ↗ Connect on LinkedIn
            </a>
            <a href="mailto:harshamasandr@gmail.com" className="contact-link-secondary">
              ✉ harshamasandr@gmail.com
            </a>
            <a
              href="https://github.com/vashihatej"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-secondary"
            >
              ⌥ github.com/vashihatej
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
