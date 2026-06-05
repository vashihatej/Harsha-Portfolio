/* eslint-disable @next/next/no-img-element */
const experience = [
  {
    companyName: "Strategy",
    title: "Senior Software Engineer",
    duration: "Feb 2026 – Present",
    location: "Tysons, Virginia",
    description: [
      "Built a cloud-agnostic Kubernetes platform using a custom Java/Spring Boot Operator and Helm, automating the complete lifecycle of BI environments across AWS, Azure, GCP, OpenShift, and on-prem Kubernetes through a 15-state reconciliation engine supporting provisioning, upgrades, backup/restore, credential rotation, and self-healing operations.",
      "Engineered enterprise deployment frameworks for highly regulated environments, enabling air-gapped, proxy-restricted, and disconnected Kubernetes deployments through private registry mirroring, OPA Gatekeeper governance, Pod Security Standards, and least-privilege RBAC controls with zero external network dependencies.",
      "Designed an event-driven telemetry pipeline processing 500K+ records/month from 100+ customer Kubernetes clusters via EventGrid → Azure Functions → Data Factory → PostgreSQL, enabling fleet-wide health monitoring and proactive support.",
      "Designed AI-powered RAG platform using OpenAI, Azure AI Search, Cosmos DB, and FastAPI, indexing 36,000+ pages across engineering, product, and operational repositories, reducing Tier-1 support tickets by 30–40% and accelerating issue resolution by approximately 50%.",
      "Developed hybrid retrieval combining vector search, BM25 ranking, and metadata-aware reranking with confidence-based validation, reducing hallucinated responses by 80%+ across platform documentation and codebase.",
      "Led deployment and production onboarding for 10–15 concurrent enterprise customers across AWS, Azure, GCP, OpenShift, and bare-metal environments, reducing average time-to-production from 4–6 weeks to under 2 weeks through standardized architecture patterns and automation.",
      "Leveraged AI-assisted software engineering workflows using Claude Code to accelerate architecture design, platform development, large-scale refactoring, debugging, and test automation, reducing delivery timelines by 3–4× and enabling production deployment of strategic initiatives in weeks instead of months.",
    ],
    logo: "/assets/images/Strategy_logo.png",
  },
  {
    companyName: "Strategy",
    title: "Software Engineer",
    duration: "Oct 2024 – Jan 2026",
    location: "Tysons, Virginia",
    description: [
      "Architected a multi-cloud BI SaaS platform across AWS, Azure, and GCP using Terraform, Helm, and Kubernetes, serving 800+ enterprise tenants and 10,000+ users and contributing to $150M+ in revenue.",
      "Built a scalable multi-LLM AI platform handling 50M+ TPM and 500K+ concurrent requests, integrating Azure OpenAI and Vertex AI (Gemini, Llama, Claude) with regional APIM for low-latency analytics.",
      "Delivered cross-cloud HA/DR architecture with defined RTO/RPO, automated failover, and resilient networking/storage design.",
      "Designed and implemented a multi-tenant, multi-region hub-and-spoke networking architecture using VPCs/VNETs, peering, Transit Gateways, NAT gateways, firewalls, and private endpoints; enabled secure networking with strong tenant isolation.",
      "Engineered Prometheus and KEDA-driven autoscaling for Kubernetes services, visualizing pod performance metrics like CPU and memory via Grafana dashboards; improved resource utilization and reduced peak-time latency by 35%.",
      "Introduced adaptive endpoint routing with latency-aware health checks and weighted traffic shifting across LLM endpoints, reducing p95 latency by 50%+ and increasing adoption by 37% while avoiding a 5x cost increase.",
      "Developed a cross-platform CLI (Python/PyInstaller) compiled to native binaries for 3 operating systems with 15+ command groups — enabling 100+ customers to authenticate (B2C OAuth), deploy/upgrade environments, and run pre-flight validation, replacing fragmented shell scripts and reducing misconfigurations.",
      "Led the migration from Azure NFS File Share to Azure NetApp Files for AKS, resolving critical DR and geo-redundancy gaps, enabling snapshot-based backups, Terraform-managed provisioning, and boosting I/O throughput by 25%.",
    ],
    logo: "/assets/images/Strategy_logo.png",
  },
  {
    companyName: "Strategy",
    title: "Associate Software Engineer",
    duration: "Jun 2024 – Oct 2024",
    location: "Tysons, Virginia",
    description: [
      "Developed Halyard, a cloud-agnostic API service built with Java Spring Boot, Redis, and GCP Cloud SQL, enabling automated provisioning of multi-tenant Kubernetes (GKE, EKS, AKS) clusters across AWS, GCP, and Azure.",
      "Engineered GitOps-based CI/CD automation using AWS CodePipeline, Step Functions, and GitHub Actions with multi-stage Docker builds, reducing container build/push time from 45 minutes to 17 minutes across 10+ repositories.",
      "Designed and implemented Agentic AI systems including multi-agent workflows, role-based AI bots, and LLM-driven automation using GPT and Gemini models, enabling autonomous cloud operations and analytics which reduced manual effort by 45%.",
      "Built automated cloud cost optimization system across 200+ accounts using Lambda/API Gateway, saving $1M annually through resource cleanup with built-in governance controls for manager approvals, user tracking, and alerts.",
      "Enhanced RAG capabilities with Azure AI Search, embeddings, and function apps, boosting analytics accuracy by 72%.",
      "Developed Python-based infrastructure automation service using Terraform to orchestrate 1,000+ cloud resources, enabling deployment for 500+ enterprise customers on Strategy's platform.",
      "Engineered Prometheus and KEDA-driven autoscaling for Kubernetes services, visualizing pod performance metrics like CPU and memory via Grafana dashboards; improved resource utilization and reduced peak-time latency by 35%.",
    ],
    logo: "/assets/images/Strategy_logo.png",
  },
  {
    companyName: "George Mason University",
    title: "Graduate Teaching Assistant",
    duration: "Aug 2023 – May 2024",
    location: "Fairfax, Virginia",
    description: [
      "Led recitations for 80 students in CS 367, focusing on computer systems and programming concepts.",
      "Designed and mentored student projects on CPU scheduling and a UNIX-like shell task monitor (VIMU), aimed at deepening understanding of CPU operations, process management, and memory systems.",
      "Developed course materials and projects in collaboration with the professor, aligning with course goals.",
      "Provided individual feedback and support, improving student outcomes and understanding.",
      "Assessed and graded assignments, offering constructive feedback to guide student improvement.",
      "Guided students through the complexities of computer subsystems and instruction set architectures in CS 465.",
      "Explained core concepts of single-cycle, multiple-cycle, and pipeline architectures, clarifying their real-world applications.",
      "Demystified memory hierarchy, including cache and virtual memory, alongside input-output processing techniques.",
      "Engaged students in discussions and hands-on projects to deepen their understanding of systems architecture.",
      "Collaborated with faculty to refine course content, ensuring relevance and comprehensiveness.",
    ],
    logo: "/assets/images/GmuLogo.jpeg",
  },
  {
    companyName: "Accenture",
    title: "Software Engineer",
    duration: "Aug 2020 – Jul 2022",
    location: "Bengaluru, Karnataka",
    description: [
      "Built and containerized full-stack services with Docker, deployed on Kubernetes, enabling autoscaling and resilient rollouts.",
      "Used Jenkins CI for continuous integration using the Apache Maven build tool to automate the build process, eliminating 80% of human labour and increasing productivity.",
      "Built servers using AWS, including adding the required volumes, starting the EC2 instance, building security groups, auto-scaling, load balancers, Route 53, and SNS in accordance with the architecture.",
      "Standardized AMI builds using Packer with Nessus scanning, ensuring secure and hardened images.",
      "Generated more than 50 unique Ansible roles and playbooks for the deployment of software and Ansible roles were given a new standard, and 80% of the current roles were refactored to assure compliance.",
      "Architected and implemented Node.js modules for data operations, achieving a 25% boost in backend performance and quicker data delivery to users.",
      "Implemented cutting-edge analytical engines that pull data from API data sources and then deliver it back as either an API or persist it back into a NoSQL platform, reducing the time to obtain crucial information by 30%.",
      "Utilized JIRA for agile project management, tracking, and optimizing workflows, which enhanced team coordination and accelerated delivery timelines.",
    ],
    logo: "/assets/images/Accenture_logo.png",
  },
  {
    companyName: "Celestial V Solutions",
    title: "Software Engineer Intern",
    duration: "Jun 2019 – Oct 2019",
    location: "Bengaluru, Karnataka",
    description: [
      "Developed front-end UI components for course material application using React.js, HTML5, and CSS3, improving application performance by 25%.",
      "Using the Serverless framework, more than 10 REST microservices were created and deployed, improving the project’s scalability and effectiveness.",
      "Developed dynamic React components, seamlessly integrating Axios API to make asynchronous HTTP requests to backend REST endpoints.",
      "Provided comprehensive technical support for backend services, effectively diagnosing and resolving critical issues to minimize downtime.",
    ],
    logo: "/assets/images/CVS_logo.png",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Experience
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className=" sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <div className="flex items-center sm:flex-col sm:justify-center">
                  <img
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-auto h-16 object-cover shadow-xl ring-1 ring-gray-400/10 sm:flex-1 sm:mb-0 dark:ring-white sm:object-none sm:h-auto"
                    width={100}
                    height={100}
                  />
                  {/* <p className="ml-8 text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p> */}
                  <div className="ml-8 sm:ml-0 sm:mt-4 sm:items-center">
                    <p className="text-lg font-semibold sm:text-m">
                      {experience.companyName} -{" "}
                      <span className="font-medium text-base">
                        {experience.location}
                      </span>
                    </p>
                    <p className="italic sm:text-sm ">{experience.duration}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p>
                  {/* <p className="text-lg font-semibold sm:text-m">
                    {experience.companyName} -{" "}
                    <span className="font-medium text-base">
                      {experience.location}
                    </span>
                  </p>
                  <p className="italic sm:text-sm">{experience.duration}</p> */}
                </div>
                <div className="pt-4">
                  <ul className="list-disc">
                    {experience.description.map((desc, index) => {
                      return (
                        <li key={index} className="sm:text-m">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExperienceComponent;
