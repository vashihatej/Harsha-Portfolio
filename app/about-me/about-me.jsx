"use client";

export default function AboutMeComponent() {
  return (
    <section className="port-section" id="about-me">
      <div className="port-container">
        <div className="section-eyebrow">Who I Am</div>
        <h2 className="section-title">About <span className="acc">Me</span></h2>

        <div className="about-card reveal">
          <div>
            <div className="about-title-sm">Engineering at<br /><span className="acc">Scale &amp; Speed</span></div>
            <div className="about-chips">
              <span className="about-chip">Cloud Architect</span>
              <span className="about-chip">AI/RAG Engineer</span>
              <span className="about-chip">Platform Builder</span>
              <span className="about-chip">AI-Augmented Dev</span>
              <span className="about-chip">Open Source</span>
            </div>
          </div>
          <div className="about-text">
            Senior Software Engineer building <strong>enterprise cloud platforms and AI-powered tools at scale</strong>.
            I architect and operate multi-cloud Kubernetes infrastructure across <strong>AWS, Azure, GCP, and bare-metal</strong>
            — serving 100+ enterprise customers including air-gapped and compliance-regulated deployments.<br /><br />
            My expertise spans <strong>cloud-native platform engineering</strong> (Terraform, Kubernetes, Helm, custom operators),
            <strong> AI systems</strong> (RAG pipelines, multi-LLM orchestration, agentic AI), and customer-facing technical leadership.
            I pioneer <strong>AI-augmented engineering workflows</strong> using Claude Code and Codex — delivering 3–4× velocity improvements
            and strategic initiatives in weeks instead of months.<br /><br />
            Outside of work I build in the open — most recently <strong>LeetCode Coach</strong>, a local AI system that coaches you through
            coding problems using the Socratic method, spaced repetition, and pattern-based analogies. Never hands you the answer.
          </div>
        </div>

        {/* Terminal teaser */}
        <div className="terminal-teaser reveal-scale">
          <div className="terminal-header">
            <span className="tdot tr" /><span className="tdot ty" /><span className="tdot tg" />
            <span className="terminal-header-title">harsha@portfolio ~ — zsh</span>
          </div>
          <div className="terminal-body">
            <span className="t-prompt">❯ </span><span className="t-cmd">whoami</span><br />
            <span className="t-out">Harsha Masandrapalya Vanarajaiah</span>
            <span className="t-out t-muted">Senior Software Engineer · Cloud &amp; AI Platform Architect</span>
            <br />
            <span className="t-prompt">❯ </span><span className="t-cmd">cat experience.log | head -2</span><br />
            <span className="t-out">Strategy LLC  →  Senior Software Engineer  (2024–present)</span>
            <span className="t-out">Accenture     →  Application Dev Analyst  (2020–2022)</span>
            <br />
            <span className="t-prompt">❯ </span><span className="t-cmd">ls open-source/</span><br />
            <span className="t-out" style={{ color: "#2dd4bf", fontWeight: 600 }}>✦ leetcode-coach/</span>
            <span className="t-out t-muted" style={{ paddingLeft: "1.2rem" }}>Socratic AI coach · spaced repetition · pattern wiki</span>
            <br />
            <span className="t-prompt">❯ </span><span className="t-blink" />
          </div>
          <div className="terminal-footer">
            <span className="terminal-hint">{`// interactive shell — try \`skills\`, \`projects\`, \`stats\``}</span>
            <a href="/templates/template-cyber-about.html" target="_blank" className="terminal-cta">
              ⚡ Open Terminal →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
