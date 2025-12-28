import { PROJECTS_DATA } from "@/content/projects";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params to get the actual slug value
  const { slug } = await params;
  
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}