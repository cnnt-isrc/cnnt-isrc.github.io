import { PROJECTS_DATA } from "@/content/projects";

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}