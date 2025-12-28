"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Video from "@/components/Video";

interface Project {
  slug: string;
  projectName: string;
  lead: string;
  year: string;
  funding: string;
  description: string;
  videoUrl?: string;
  softwareLink?: string;
}

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <section className="mb-12 mt-24 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight">
          {project.projectName}
        </h1>

        <div className="space-y-2 text-gray-300">
          <p>
            <span className="font-semibold text-gray-200">Lead:</span>{" "}
            {project.lead}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Year:</span>{" "}
            {project.year}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Funding:</span>{" "}
            {project.funding}
          </p>
        </div>
      </div>

      {/* Video Section (if available) */}
      {project.videoUrl && (
        <div className="mb-8">
          <Video videoUrl={project.videoUrl} />
        </div>
      )}

      {/* Description */}
      <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Description</h2>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </div>

      {/* Software Link */}
      {project.softwareLink && (
        <div>
          
            <a href={project.softwareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <ExternalLink className="w-5 h-5" />
            View Software Repository
          </a>
        </div>
      )}
    </section>
  );
}