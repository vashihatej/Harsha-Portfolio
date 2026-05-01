/* eslint-disable @next/next/no-img-element */
const experience = [
  {
    companyName: "Microstrategy",
    title: "Software Engineer",
    duration: "Jun 2024 – Present",
    location: "Tysons, Virginia",
    description: [
      "Architected a multi-cloud BI SaaS platform across AWS, Azure, and GCP using Terraform, Helm, and Kubernetes, serving 800+ enterprise tenants and 10,000+ users and contributing to $150M+ in annual revenue.",
      "Built a scalable multi-LLM AI platform handling 50M+ TPM and 500K+ concurrent requests, integrating Azure OpenAI and Vertex AI (Gemini, Llama, Claude) with regional APIM for low-latency analytics.",
      "Introduced adaptive endpoint routing with latency-aware health checks and weighted traffic shifting, reducing p95 latency by 50%+ and improving adoption by 37% while avoiding a 5× infrastructure cost increase.",
      "Implemented a Kubernetes Operator (Java Operator SDK) for declarative environment lifecycle management, enabling self-healing reconciliation across 800+ tenant environments.",
      "Delivered cross-cloud high availability and disaster recovery architecture with defined RTO/RPO, automated failover, and resilient networking and storage design.",
      "Reduced infrastructure provisioning time by 50% through Terraform parallelization, module optimization, and remote state isolation.",
      "Designed a multi-tenant, multi-region hub-and-spoke networking architecture using VPCs/VNETs, Transit Gateways, NAT gateways, firewalls, and private endpoints, enabling secure cross-cloud connectivity with strong tenant isolation.",
      "Scaled a multi-tenant ML inference platform on EKS and Amazon SageMaker, handling 10K+ real-time voice inference requests/day with sub-100 ms latency, tenant isolation, and autoscaling.",
      "Developed agentic AI systems including multi-agent workflows, role-based AI bots, and LLM-driven automation using GPT and Gemini models, reducing manual cloud operations effort by 45%.",
      "Built a cloud-agnostic provisioning service (Halyard) using Java Spring Boot, Redis, and GCP Cloud SQL, automating multi-tenant Kubernetes cluster deployment (GKE, EKS, AKS) across AWS, GCP, and Azure.",
      "Engineered GitOps-based CI/CD pipelines using AWS CodePipeline, Step Functions, and GitHub Actions with multi-stage Docker builds, reducing build time from 45 to 17 minutes across 10+ repositories and achieving 98.7% success rate on 500+ daily executions.",
      "Implemented Prometheus and KEDA-driven autoscaling for Kubernetes services with Grafana dashboards for CPU and memory visibility, improving resource utilization and reducing peak-time latency by 35%.",
      "Developed Python-based Terraform automation services orchestrating 1,000+ cloud resources, enabling deployment for 500+ enterprise customers on the platform.",
      "Built serverless workflows using AWS (Lambda, CloudFormation, CodeBuild, S3) and Azure (AKS, Azure Functions, Logic Apps, Container Apps jobs) to improve operational efficiency and resource utilization.",
      "Led migration from Azure NFS File Share to Azure NetApp Files for AKS, enabling snapshot-based backups, cross-region replication, and improving I/O throughput by 25%.",
      "Built automated cloud cost optimization pipelines across 200+ accounts, saving $1M+ annually through resource cleanup, governance workflows, and usage tracking.",
      "Enhanced RAG pipeline accuracy by 72% using Azure AI Search, embeddings optimization, and function-based retrieval workflows.",
      "Developed a diagnostic CLI platform tool, reducing infrastructure troubleshooting time from days to under 30 minutes.",
      "Authored cloud and AI platform architecture designs and technical proposals, guiding long-term platform strategy and scalability decisions.",
    ],
    logo: "/assets/images/Strategy_logo.png",
  },
  {
    companyName: "George Mason University",
    title: "Graduate Teaching Assistant",
    duration: "May 2023 – Present",
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
      "Containerized and deployed full-stack services using Docker on Kubernetes, enabling autoscaling, resilient rollouts, and zero-downtime deployments.",
      "Optimized CI/CD pipelines using Jenkins and Apache Maven, eliminating 80% of manual effort and significantly improving build and release efficiency.",
      "Provisioned and managed AWS infrastructure including EC2, EBS volumes, security groups, Auto Scaling, load balancers, Route 53, and SNS, supporting scalable and reliable application deployments.",
      "Standardized AMI builds using Packer with integrated Nessus vulnerability scanning, ensuring secure and hardened base images across environments.",
      "Developed and refactored 50+ Ansible roles and playbooks, improving deployment consistency and bringing 80% of existing automation in line with compliance standards.",
      "Built Node.js backend modules for data processing, improving application performance by 25% and accelerating data delivery.",
      "Designed data processing pipelines that ingest data from external APIs and expose it via APIs or persist it into NoSQL systems, reducing data retrieval time by 30%.",
      "Collaborated in Agile development workflows using JIRA, improving team coordination, task tracking, and delivery timelines.",
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
