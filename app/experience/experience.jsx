/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";

const experience = [
  {
    companyName: "Strategy",
    title: "Senior Software Engineer",
    duration: "Feb 2026 – Present",
    location: "Tysons Corner, Virginia · On-site",
    logo: "/assets/images/Strategy_logo.png",
    chips: [
      { label: "100+ Enterprise Customers", cls: "ic-teal" },
      { label: "Tickets ↓30–40%", cls: "ic-cyan" },
      { label: "Hallucinations ↓80%+", cls: "ic-green" },
      { label: "Delivery ↓3–4×", cls: "ic-amber" },
    ],
    bullets: [
      "Built a cloud-agnostic Kubernetes platform using a custom Java/Spring Boot Operator and Helm, automating the complete lifecycle of BI environments across AWS, Azure, GCP, OpenShift, and on-prem Kubernetes through a 15-state reconciliation engine supporting provisioning, upgrades, backup/restore, credential rotation, and self-healing operations.",
      "Engineered enterprise deployment frameworks for highly regulated environments, enabling air-gapped, proxy-restricted, and disconnected Kubernetes deployments through private registry mirroring, OPA Gatekeeper governance, Pod Security Standards, and least-privilege RBAC controls with zero external network dependencies.",
      "Designed an event-driven telemetry pipeline processing 500K+ records/month from 100+ customer Kubernetes clusters via EventGrid → Azure Functions → Data Factory → PostgreSQL, enabling fleet-wide health monitoring and proactive support.",
      "Designed AI-powered RAG platform using OpenAI, Azure AI Search, Cosmos DB, and FastAPI, indexing 36,000+ pages across engineering, product, and operational repositories, reducing Tier-1 support tickets by 30–40% and accelerating issue resolution by approximately 50%.",
      "Developed hybrid retrieval combining vector search, BM25 ranking, and metadata-aware reranking with confidence-based validation, reducing hallucinated responses by 80%+ across platform documentation and codebase.",
      "Led deployment and production onboarding for 10–15 concurrent enterprise customers across AWS, Azure, GCP, OpenShift, and bare-metal environments, reducing average time-to-production from 4–6 weeks to under 2 weeks through standardized architecture patterns and automation.",
      "Leveraged AI-assisted software engineering workflows using Claude Code to accelerate architecture design, platform development, large-scale refactoring, debugging, and test automation, reducing delivery timelines by 3–4× and enabling production deployment of strategic initiatives in weeks instead of months.",
    ],
  },
  {
    companyName: "Strategy",
    title: "Software Engineer",
    duration: "Oct 2024 – Jan 2026",
    location: "Tysons Corner, Virginia · On-site",
    logo: "/assets/images/Strategy_logo.png",
    chips: [
      { label: "$150M+ Revenue", cls: "ic-amber" },
      { label: "p95 Latency ↓50%+", cls: "ic-teal" },
      { label: "50M+ TPM", cls: "ic-cyan" },
      { label: "I/O ↑25%", cls: "ic-green" },
    ],
    bullets: [
      "Architected a multi-cloud BI SaaS platform across AWS, Azure, and GCP using Terraform, Helm, and Kubernetes, serving 800+ enterprise tenants and 10,000+ users and contributing to $150M+ in revenue.",
      "Built a scalable multi-LLM AI platform handling 50M+ TPM and 500K+ concurrent requests, integrating Azure OpenAI and Vertex AI (Gemini, Llama, Claude) with regional APIM for low-latency analytics.",
      "Delivered cross-cloud HA/DR architecture with defined RTO/RPO, automated failover, and resilient networking/storage design.",
      "Designed and implemented a multi-tenant, multi-region hub-and-spoke networking architecture using VPCs/VNETs, peering, Transit Gateways, NAT gateways, firewalls, and private endpoints; enabled secure networking with strong tenant isolation.",
      "Engineered Prometheus and KEDA-driven autoscaling for Kubernetes services, visualizing pod performance metrics like CPU and memory via Grafana dashboards; improved resource utilization and reduced peak-time latency by 35%.",
      "Introduced adaptive endpoint routing with latency-aware health checks and weighted traffic shifting across LLM endpoints, reducing p95 latency by 50%+ and increasing adoption by 37% while avoiding a 5× cost increase.",
      "Developed a cross-platform CLI (Python/PyInstaller) compiled to native binaries for 3 operating systems with 15+ command groups — enabling 100+ customers to authenticate (B2C OAuth), deploy/upgrade environments, and run pre-flight validation, replacing fragmented shell scripts and reducing misconfigurations.",
      "Led the migration from Azure NFS File Share to Azure NetApp Files for AKS, resolving critical DR and geo-redundancy gaps, enabling snapshot-based backups, Terraform-managed provisioning, and boosting I/O throughput by 25%.",
    ],
  },
  {
    companyName: "Strategy",
    title: "Associate Software Engineer",
    duration: "Jun 2024 – Oct 2024",
    location: "Tysons Corner, Virginia · On-site",
    logo: "/assets/images/Strategy_logo.png",
    chips: [
      { label: "$1M/yr Saved", cls: "ic-amber" },
      { label: "Build Time ↓62%", cls: "ic-teal" },
      { label: "Manual Effort ↓45%", cls: "ic-cyan" },
      { label: "500+ Customers", cls: "ic-slate" },
    ],
    bullets: [
      "Developed Halyard, a cloud-agnostic API service built with Java Spring Boot, Redis, and GCP Cloud SQL, enabling automated provisioning of multi-tenant Kubernetes (GKE, EKS, AKS) clusters across AWS, GCP, and Azure.",
      "Engineered GitOps-based CI/CD automation using AWS CodePipeline, Step Functions, and GitHub Actions with multi-stage Docker builds, reducing container build/push time from 45 minutes to 17 minutes across 10+ repositories.",
      "Designed and implemented Agentic AI systems including multi-agent workflows, role-based AI bots, and LLM-driven automation using GPT and Gemini models, enabling autonomous cloud operations and analytics which reduced manual effort by 45%.",
      "Built automated cloud cost optimization system across 200+ accounts using Lambda/API Gateway, saving $1M annually through resource cleanup with built-in governance controls for manager approvals, user tracking, and alerts.",
      "Enhanced RAG capabilities with Azure AI Search, embeddings, and function apps, boosting analytics accuracy by 72%.",
      "Developed Python-based infrastructure automation service using Terraform to orchestrate 1,000+ cloud resources, enabling deployment for 500+ enterprise customers on Strategy's platform.",
      "Engineered Prometheus and KEDA-driven autoscaling for Kubernetes services, visualizing pod performance metrics like CPU and memory via Grafana dashboards; improved resource utilization and reduced peak-time latency by 35%.",
    ],
  },
  {
    companyName: "George Mason University",
    title: "Graduate Teaching Assistant",
    duration: "Aug 2023 – May 2024",
    location: "Fairfax County, Virginia · On-site",
    logo: "/assets/images/GmuLogo.jpeg",
    chips: [
      { label: "80 Students", cls: "ic-slate" },
      { label: "CS 367 · CS 465", cls: "ic-teal" },
    ],
    bullets: [
      "Led recitations for 80 students in CS 367, focusing on computer systems and programming concepts.",
      "Designed and mentored student projects on CPU scheduling and a UNIX-like shell task monitor (VIMU), deepening understanding of CPU operations, process management, and memory systems.",
      "Developed course materials and projects in collaboration with the professor, aligning with course goals; assessed and graded assignments with constructive feedback.",
      "Guided students through the complexities of computer subsystems and instruction set architectures in CS 465.",
      "Explained core concepts of single-cycle, multiple-cycle, and pipeline architectures and their real-world applications; demystified memory hierarchy including cache, virtual memory, and I/O processing.",
      "Collaborated with faculty to refine course content, ensuring relevance and comprehensiveness across both semesters.",
    ],
  },
  {
    companyName: "Accenture",
    title: "Software Engineer",
    duration: "Aug 2020 – Jul 2022",
    location: "Bengaluru, Karnataka, India",
    logo: "/assets/images/Accenture_logo.png",
    chips: [
      { label: "CI/CD: 80% Labour ↓", cls: "ic-amber" },
      { label: "+25% Backend Perf", cls: "ic-teal" },
      { label: "50+ Ansible Roles", cls: "ic-slate" },
    ],
    bullets: [
      "Built and containerized full-stack services with Docker, deployed on Kubernetes, enabling autoscaling and resilient rollouts.",
      "Used Jenkins CI for continuous integration using the Apache Maven build tool to automate the build process, eliminating 80% of human labour and increasing productivity.",
      "Built servers using AWS, including adding the required volumes, starting EC2 instances, building security groups, auto-scaling, load balancers, Route 53, and SNS in accordance with the architecture.",
      "Standardized AMI builds using Packer with Nessus scanning, ensuring secure and hardened images.",
      "Generated more than 50 unique Ansible roles and playbooks for deployment of software; refactored 80% of existing roles to assure compliance with new standards.",
      "Architected and implemented Node.js modules for data operations, achieving a 25% boost in backend performance and quicker data delivery to users.",
      "Implemented cutting-edge analytical engines that pull data from API data sources and deliver it back as either an API or persist it into a NoSQL platform, reducing the time to obtain crucial information by 30%.",
      "Utilized JIRA for agile project management, tracking, and optimizing workflows, enhancing team coordination and accelerating delivery timelines.",
    ],
  },
  {
    companyName: "Celestial V Solutions",
    title: "Software Engineer Intern",
    duration: "Jun 2019 – Oct 2019",
    location: "Bengaluru, Karnataka, India · On-site",
    logo: null,
    chips: [
      { label: "Perf ↑25%", cls: "ic-teal" },
      { label: "10+ Microservices", cls: "ic-cyan" },
    ],
    bullets: [
      "Developed front-end UI components for a course material application using React.js, HTML5, and CSS3, improving application performance by 25%.",
      "Created and deployed 10+ REST microservices using the Serverless framework, improving project scalability and effectiveness.",
      "Developed dynamic React components, seamlessly integrating Axios API to make asynchronous HTTP requests to backend REST endpoints.",
      "Provided comprehensive technical support for backend services, effectively diagnosing and resolving critical issues to minimize downtime.",
    ],
  },
];

export default function ExperienceComponent() {
  useEffect(() => {
    const cards = document.querySelectorAll(".exp-card");
    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-3px)`;
      };
      const onLeave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section className="port-section" id="experience">
      <div className="port-container">
        <div className="section-eyebrow">Work History</div>
        <h2 className="section-title">Professional <span className="acc">Experience</span></h2>
        <div className="exp-list">
          {experience.map((job, i) => (
            <div key={i} className="exp-card reveal-left">
              <div className="exp-header">
                {job.logo ? (
                  <img src={job.logo} alt={job.companyName} className="exp-logo" />
                ) : (
                  <div className="exp-logo-placeholder">{job.companyName[0]}</div>
                )}
                <div className="exp-title-block">
                  <div className="exp-company">{job.companyName}</div>
                  <div className="exp-role">{job.title}</div>
                  <div className="exp-meta">
                    <span>📅 {job.duration}</span>
                    <span>📍 {job.location}</span>
                  </div>
                </div>
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="impact-chips">
                {job.chips.map((c, j) => (
                  <span key={j} className={`impact-chip ${c.cls}`}>{c.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
