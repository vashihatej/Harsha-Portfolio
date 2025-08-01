import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-4xl">About Me</h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        <blockquote className="text-xl italic hover:bg-opacity-90">
          <p className="my-8 text-justify">
            {`"A Full-Stack Engineer with a robust foundation from George Mason University, I specialize in building scalable apps and automating infrastructure across AWS, Azure, and GCP. With 4+ years of experience, my stack spans React, Next.js, Node.js, and powerful DevOps tools like Docker, Kubernetes, Terraform, and CI/CD pipelines. I thrive at the intersection of code and cloud—turning complex systems into streamlined, high-performance solutions."`}
          </p>
        </blockquote>
      </div>
    </>
  );
}
