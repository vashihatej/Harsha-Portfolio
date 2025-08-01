/* eslint-disable @next/next/no-img-element */
const experience = [
  {
    companyName: "Microstrategy",
    title: "Software Engineer",
    duration: "Jun 2024 – Present",
    location: "Tysons, Virginia",
    description: [
      "Orchestrated multi-cloud deployment for 5,000+ users on AWS, Azure, and GCP using cloud-agnostic tools like Terraformand Kubernetes; achieved 99.99% uptime, streamlined AI analytics, scalable infrastructure with zero-downtime rollouts.",
      "Architected cloud infrastructure with automatic failover and DR using Terraform, ECS ensuring uninterrupted operations.",
      "Engineered Prometheus and KEDA-driven autoscaling for Kubernetes services, visualizing pod performance metrics likeCPU and memory via Grafana dashboards; improved resource utilization and reduced peak-time latency by 35%.",
      "Utilized AWS services (Lambda, CloudFormation, CodeBuild, S3) and Azure services (AKS, Azure Functions,Logic Apps, Container app jobs) to architect serverless workflows, enhancing efficiency and resource utilization.",
      "Led the migration from Azure NFS File Share to Azure NetApp Files for AKS, resolving critical DR and geo-redundancy gaps, enabling snapshot-based backups, Terraform-managed provisioning, and boosting I/O throughput by 25%.",
      "Directed scrum meetings, mentored juniors & reviewed source code, reduced timeline by 10% and led to early launch.",
      "Built serverless cleanup pipelines to reclaim unused resources daily, driving $1M+ in annual savings across AWS and Azure.",
      "Enhanced RAG capabilities with Azure AI Search, embeddings, and function apps, boosting analytics accuracy by 72%.",
      "Designed and implemented scalable AI-powered cloud architectures, processing over 50 million TPM and supporting 500K concurrent API requests, leveraging Azure OpenAI, APIM across US, EU regions to power analytics bots.",
      "Automated image builds via Packer, integrated into CI pipelines with Nessus scanning, ensuring hardened deployments.",
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
      "Built and containerized full-stack services with Docker, deployed on Kubernetes, enabling autoscaling and resilient rollouts.",
      "Architected modular Helm charts for Kubernetes applications to streamline deployment and configuration management.",
      "Authored 50+ Ansible roles/playbooks and refactored 80% of existing ones to ensure compliance and standardization.",
      "Provisioned AWS EC2 infrastructure with volumes, auto-scaling, load balancers, Route 53, and SNS based on architecture.",
      "Optimized the build pipeline using Jenkins CI, Apache Maven reducing manual effort by 80% and accelerating delivery",
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
