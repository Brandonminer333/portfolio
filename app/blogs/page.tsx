import SiteHeader from "@/components/SiteHeader";
import ProjectCard from "@/components/ProjectCard";
import { blogs } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Long-form posts on Bayesian regression, random forest voting, naive Bayes, and credit card fraud detection.",
};

export default function BlogsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
        <div className="flex flex-col gap-6 mt-4">
          {blogs.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
