import { useTheme } from "next-themes";
import SkillCard from "../components/skillCard";
import SoftSkillCard from "../components/softSkillsCard";

function SkillsComponent() {
  const { resolvedTheme } = useTheme();

  const technicalSkills = [
    // C, JavaScript, Typescript, Python, HTML, CSS, React, React Native, Node.js, Jest, Sequelize, Express
    { name: "Python", imageUrl: "/assets/svgs/python.svg" },
    { name: "C", imageUrl: "/assets/images/C.png" },
    { name: "Javascript", imageUrl: "/assets/svgs/javascript.svg" },
    { name: "Typescript", imageUrl: "/assets/svgs/typescript.svg" },
    { name: "HTML", imageUrl: "/assets/svgs/html5.svg" },
    { name: "CSS", imageUrl: "/assets/svgs/css.svg" },
    { name: "React", imageUrl: "/assets/svgs/react.svg" },
    { name: "NextJs", imageUrl: "/assets/images/nextJs1.jpeg" },
    { name: "Tailwind", imageUrl: "/assets/images/tailwind.webp" },
    {
      name: "Node.js",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/node-js.svg"
          : "/assets/svgs/nodejs.svg",
    },
    {
      name: "Express",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/images/express.png"
          : "/assets/svgs/express.svg",
    },
    { name: "Postgres", imageUrl: "/assets/svgs/postgresql.svg" },
    { name: "MySql", imageUrl: "/assets/svgs/mysql.svg" },
    { name: "MongoDb", imageUrl: "/assets/svgs/mongodb.svg" },
    { name: "Jenkins", imageUrl: "/assets/svgs/jenkins.svg" },
    { name: "Git", imageUrl: "/assets/svgs/git.svg" },
    { name: "Postman", imageUrl: "/assets/svgs/postman.svg" },
    { name: "Swagger", imageUrl: "/assets/svgs/swagger-svgrepo-com.svg" },
    { name: "npm", imageUrl: "/assets/svgs/npm.svg" },
    { name: "Kubernetes", imageUrl: "/assets/svgs/kubernetes-svgrepo-com.svg" },
    { name: "Docker", imageUrl: "/assets/svgs/docker-logo-svgrepo-com.svg" },
    { name: "Helm", imageUrl: "/assets/svgs/helm-svgrepo-com.svg" },
    { name: "Ansible", imageUrl: "/assets/svgs/ansible-svgrepo-com.svg" },
    {
      name: "Terraform",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/terraform-icon-svgrepo-com.svg"
          : "/assets/svgs/terraform-svgrepo-com.svg",
    },
    { name: "Redis", imageUrl: "/assets/svgs/redis-svgrepo-com.svg" },
    {
      name: "AWS",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/aws-dark.svg"
          : "/assets/svgs/aws.svg",
    },
    {
      name: "API Gateway",
      imageUrl: "/assets/svgs/aws-api-gateway-svgrepo-com.svg",
    },
    {
      name: "CloudFormation",
      imageUrl: "/assets/svgs/aws-cloudformation-svgrepo-com.svg",
    },
    { name: "DynamoDB", imageUrl: "/assets/svgs/aws-dynamodb-svgrepo-com.svg" },
    {
      name: "CodeBuild",
      imageUrl: "/assets/svgs/aws-codedeploy-svgrepo-com.svg",
    },
    { name: "Route53", imageUrl: "/assets/svgs/aws-route53-svgrepo-com.svg" },
    { name: "Lambda", imageUrl: "/assets/svgs/aws-lambda-svgrepo-com.svg" },
    { name: "EC2", imageUrl: "/assets/svgs/aws-ec2-svgrepo-com.svg" },
    { name: "S3", imageUrl: "/assets/svgs/aws-s3-svgrepo-com.svg" },
    { name: "Azure", imageUrl: "/assets/svgs/azure-v2-svgrepo-com.svg" },
    { name: "Azure VMs", imageUrl: "/assets/svgs/azure-vms-svgrepo-com.svg" },
    { name: "Azure AKS", imageUrl: "/assets/svgs/azure-aks-svgrepo-com.svg" },
    {
      name: "Azure OpenAI",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/images/openai.png"
          : "/assets/svgs/openai-svgrepo-com.svg",
    },
    {
      name: "Azure DevOps",
      imageUrl: "/assets/svgs/azure-devops-svgrepo-com.svg",
    },
    { name: "Azure AI Search", imageUrl: "/assets/images/ai_search.png" },
    { name: "GCP", imageUrl: "/assets/svgs/gcp-svgrepo-com.svg" },
    {
      name: "GKE",
      imageUrl: "/assets/svgs/google-kubernetes-engine-svgrepo-com.svg",
    },
    {
      name: "Github",
      imageUrl:
        resolvedTheme === "dark"
          ? "/assets/svgs/github-color-svgrepo-com.svg"
          : "/assets/svgs/github-142-svgrepo-com.svg",
    },
    { name: "Prometheus", imageUrl: "/assets/images/prometheus.png" },
  ];

  const softSkills = [
    { name: "Leadership", description: "" },
    { name: "Effective Communication", description: "" },
    { name: "Team Management", description: "" },
    { name: "Problem-Solving", description: "" },
    { name: "Collaboration", description: "" },
    { name: "Learning Agility", description: "" },
    { name: "Critical Thinking", description: "" },
    { name: "Time Management", description: "" },
  ];

  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Skills
      </h2>
      <h4 className="text-2xl mx-auto max-w-6xl font-semibold mt-4 py-2 sm:text-xl">
        Technical Skills
      </h4>
      <div className="mx-auto max-w-6xl flex flex-wrap justify-center">
        {technicalSkills?.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              name={skill.name}
              imageUrl={skill.imageUrl}
            />
          );
        })}
      </div>

      <h4 className="text-2xl mx-auto max-w-6xl font-semibold mt-4 py-2 sm:text-xl">
        Soft Skills
      </h4>
      <div className="mx-auto max-w-6xl flex justify-center flex-wrap overflow-x-scroll sm:flex-nowrap sm:justify-normal">
        {softSkills?.map((skill, index) => {
          return (
            <SoftSkillCard
              key={index}
              name={skill.name}
              description={skill.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default SkillsComponent;
