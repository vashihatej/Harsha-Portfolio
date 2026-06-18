/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "next-themes";

export default function SkillsComponent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const groups = [
    {
      label: "AI / LLM",
      ai: true,
      skills: [
        { name: "Claude Code", img: "/assets/images/claudecode.png" },
        { name: "Anthropic", img: isDark ? "/assets/images/anthropic-dark.png" : "/assets/images/anthropic-light.png" },
        { name: "OpenAI", img: "/assets/images/openai-lobehub.webp" },
        { name: "GitHub Copilot", img: isDark ? "/assets/svgs/githubcopilot-white.svg" : "/assets/images/copilot-light.png" },
        { name: "Hugging Face", img: "/assets/svgs/huggingface.svg" },
        { name: "Azure OpenAI", img: isDark ? "/assets/images/openai.png" : "/assets/svgs/openai-svgrepo-com.svg" },
        { name: "Azure AI Search", img: "/assets/images/ai_search.png" },
        { name: "Cosmos DB", emoji: "🌐" },
        { name: "FastAPI", img: "/assets/images/fastapi.png" },
      ],
    },
    {
      label: "Languages",
      skills: [
        { name: "Python", img: "/assets/svgs/python.svg" },
        { name: "TypeScript", img: "/assets/svgs/typescript.svg" },
        { name: "JavaScript", img: "/assets/svgs/javascript.svg" },
        { name: "Java", emoji: "☕" },
        { name: "C", img: "/assets/images/C.png" },
        { name: "HTML", img: "/assets/svgs/html5.svg" },
        { name: "CSS", img: "/assets/svgs/css.svg" },
      ],
    },
    {
      label: "Frontend / Backend",
      skills: [
        { name: "React", img: "/assets/svgs/react.svg" },
        { name: "Next.js", img: "/assets/images/nextJs1.jpeg" },
        { name: "Tailwind", img: "/assets/images/tailwind.webp" },
        { name: "Node.js", img: isDark ? "/assets/svgs/node-js.svg" : "/assets/svgs/nodejs.svg" },
        { name: "Express", img: isDark ? "/assets/images/express.png" : "/assets/svgs/express.svg" },
        { name: "Spring Boot", emoji: "🍃" },
        { name: "PostgreSQL", img: "/assets/svgs/postgresql.svg" },
        { name: "MongoDB", img: "/assets/svgs/mongodb.svg" },
        { name: "MySQL", img: "/assets/svgs/mysql.svg" },
        { name: "Redis", img: "/assets/svgs/redis-svgrepo-com.svg" },
      ],
    },
    {
      label: "Cloud — AWS",
      skills: [
        { name: "AWS", img: isDark ? "/assets/svgs/aws-dark.svg" : "/assets/svgs/aws.svg" },
        { name: "EC2", img: "/assets/svgs/aws-ec2-svgrepo-com.svg" },
        { name: "S3", img: "/assets/svgs/aws-s3-svgrepo-com.svg" },
        { name: "Lambda", img: "/assets/svgs/aws-lambda-svgrepo-com.svg" },
        { name: "API Gateway", img: "/assets/svgs/aws-api-gateway-svgrepo-com.svg" },
        { name: "DynamoDB", img: "/assets/svgs/aws-dynamodb-svgrepo-com.svg" },
        { name: "Route53", img: "/assets/svgs/aws-route53-svgrepo-com.svg" },
        { name: "CloudFormation", img: "/assets/svgs/aws-cloudformation-svgrepo-com.svg" },
        { name: "CodeBuild", img: "/assets/svgs/aws-codedeploy-svgrepo-com.svg" },
      ],
    },
    {
      label: "Cloud — Azure / GCP",
      skills: [
        { name: "Azure", img: "/assets/svgs/azure-v2-svgrepo-com.svg" },
        { name: "AKS", img: "/assets/svgs/azure-aks-svgrepo-com.svg" },
        { name: "Azure DevOps", img: "/assets/svgs/azure-devops-svgrepo-com.svg" },
        { name: "Azure VMs", img: "/assets/svgs/azure-vms-svgrepo-com.svg" },
        { name: "Event Grid", img: "/assets/images/eventgrid.png" },
        { name: "GCP", img: "/assets/svgs/gcp-svgrepo-com.svg" },
        { name: "GKE", img: "/assets/svgs/google-kubernetes-engine-svgrepo-com.svg" },
        { name: "Vertex AI", img: "/assets/svgs/vertexai.svg" },
        { name: "OpenShift", img: "/assets/svgs/openshift.svg" },
      ],
    },
    {
      label: "Infrastructure & DevOps",
      skills: [
        { name: "Kubernetes", img: "/assets/svgs/kubernetes-svgrepo-com.svg" },
        { name: "Docker", img: "/assets/svgs/docker-logo-svgrepo-com.svg" },
        { name: "Helm", img: "/assets/svgs/helm-svgrepo-com.svg" },
        { name: "Terraform", img: isDark ? "/assets/svgs/terraform-icon-svgrepo-com.svg" : "/assets/svgs/terraform-svgrepo-com.svg" },
        { name: "Ansible", img: "/assets/svgs/ansible-svgrepo-com.svg" },
        { name: "Jenkins", img: "/assets/svgs/jenkins.svg" },
        { name: "GitHub Actions", img: "/assets/svgs/githubactions.svg" },
        { name: "Git", img: "/assets/svgs/git.svg" },
        { name: "GitHub", img: isDark ? "/assets/svgs/github-color-svgrepo-com.svg" : "/assets/svgs/github-142-svgrepo-com.svg" },
        { name: "Packer", emoji: "📦" },
      ],
    },
    {
      label: "Observability",
      skills: [
        { name: "Prometheus", img: "/assets/svgs/prometheus.svg" },
        { name: "Grafana", img: "/assets/svgs/grafana.svg" },
        { name: "KEDA", img: "/assets/svgs/keda.svg" },
      ],
    },
  ];

  return (
    <section className="port-section" id="skills">
      <div className="port-container">
        <div className="section-eyebrow">Tech Stack</div>
        <h2 className="section-title">Skills &amp; <span className="acc">Technologies</span></h2>
        <div className="skills-sections">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="skill-group-header">{group.label}</div>
              <div className="skills-icon-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className={`skill-icon-card${group.ai ? " ai-card" : ""}`}>
                    {skill.img ? (
                      <img src={skill.img} alt={skill.name} />
                    ) : (
                      <div className="skill-emoji-icon">{skill.emoji}</div>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
