import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-4xl">About Me</h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        <blockquote className="text-xl italic hover:bg-opacity-90">
          <p className="my-8 text-justify">
            {`"Senior Software Engineer building enterprise cloud platforms and AI-powered tools at scale. I architect and operate multi-cloud Kubernetes infrastructure across AWS, Azure, GCP, and bare-metal — serving 100+ enterprise customers, including air-gapped and compliance-regulated deployments for financial services and government. My expertise spans cloud-native platform engineering (Terraform, Kubernetes, Helm, custom operators), AI systems (RAG pipelines, multi-LLM orchestration, agentic AI), and customer-facing technical leadership. I pioneer AI-augmented development workflows using Claude Code and actively integrate AI tooling into engineering practices to deliver 3x velocity improvements."`}
          </p>
        </blockquote>
      </div>
    </>
  );
}
