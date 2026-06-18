/* eslint-disable @next/next/no-img-element */
"use client";

const projects = [
  {
    name: "Halyard — Cloud-Agnostic K8s Platform",
    description:
      "Java Spring Boot Kubernetes Operator automating full lifecycle management across AWS EKS, Azure AKS, GCP GKE, OpenShift, and on-prem via a 15-state reconciliation engine — serving 100+ enterprise customers. Includes air-gapped deployments with private registry mirroring and OPA Gatekeeper.",
    tech: ["Java", "Spring Boot", "Kubernetes", "Helm", "AWS", "Azure", "GCP", "OpenShift", "OPA"],
    chips: [{ label: "100+ Enterprise Customers", cls: "ic-teal" }, { label: "15-State Engine", cls: "ic-cyan" }],
    emoji: "☸️",
    link: null,
  },
  {
    name: "AI RAG Platform",
    description:
      "OpenAI · Azure AI Search · Cosmos DB · FastAPI powered RAG platform with 36K+ pages indexed. Reduced Tier-1 support tickets by 30–40% and hallucinations by 80%+ via hybrid retrieval combining BM25, vector search, and confidence-based reranking.",
    tech: ["OpenAI", "Azure AI Search", "Cosmos DB", "FastAPI", "Python", "BM25"],
    chips: [{ label: "Tickets ↓30–40%", cls: "ic-green" }, { label: "Hallucinations ↓80%+", cls: "ic-cyan" }],
    emoji: "🤖",
    link: null,
  },
  {
    name: "Multi-LLM AI Platform",
    description:
      "Scalable multi-LLM platform handling 50M+ TPM and 500K+ concurrent requests across Azure OpenAI and Vertex AI (Gemini, Llama, Claude) with regional APIM. Adaptive endpoint routing with latency-aware health checks reduced p95 latency by 50%+.",
    tech: ["Azure OpenAI", "Vertex AI", "Python", "APIM", "Prometheus", "KEDA", "Grafana"],
    chips: [{ label: "50M+ TPM", cls: "ic-amber" }, { label: "p95 Latency ↓50%", cls: "ic-teal" }],
    emoji: "⚡",
    link: null,
  },
  {
    name: "Rapid Cloudify",
    description:
      "No-code platform that automates cloud deployments, CI/CD pipelines, and infrastructure provisioning for 20+ tech stacks. Built for startups and developers — simplifies DevOps with one-click scalability, real-time collaboration, and zero manual configs.",
    tech: ["Python", "Ansible", "AWS", "Next.js", "Flask", "Nginx", "Redis"],
    chips: [{ label: "20+ Tech Stacks", cls: "ic-teal" }, { label: "Zero Manual Config", cls: "ic-cyan" }],
    emoji: "🚀",
    link: "https://rapidcloudify.com",
  },
  {
    name: "Event-Driven Telemetry Pipeline",
    description:
      "Processing 500K+ records/month from 100+ clusters via Azure EventGrid → Azure Functions → Data Factory → PostgreSQL. Real-time observability dashboard with Prometheus + Grafana providing actionable cluster health metrics.",
    tech: ["Azure EventGrid", "Azure Functions", "Data Factory", "PostgreSQL", "Prometheus", "Grafana"],
    chips: [{ label: "500K+ Records/mo", cls: "ic-green" }, { label: "100+ Clusters", cls: "ic-slate" }],
    emoji: "📊",
    link: null,
  },
  {
    name: "VIMU — UNIX Shell Task Monitor",
    description:
      "A UNIX-like shell task monitor built as part of CS 467 graduate coursework at GMU. Features CPU scheduling simulation, process lifecycle management, and pipeline architectures — single-cycle, multiple-cycle, and pipelined implementations.",
    tech: ["C", "Linux", "Systems Programming", "CPU Scheduling"],
    chips: [{ label: "GMU CS 467", cls: "ic-slate" }, { label: "Systems", cls: "ic-teal" }],
    emoji: "🖥️",
    link: null,
  },
];

export default function ProjectsComponent() {
  return (
    <section className="port-section" id="projects">
      <div className="port-container">
        <div className="section-eyebrow">What I&apos;ve Built</div>
        <h2 className="section-title">Featured <span className="acc">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card reveal">
              <div className="project-emoji">{project.emoji}</div>
              <div className="project-content">
                <div className="project-name">{project.name}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="impact-chips" style={{ marginTop: ".75rem" }}>
                  {project.chips.map((c, j) => (
                    <span key={j} className={`impact-chip ${c.cls}`}>{c.label}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  ↗ View
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
