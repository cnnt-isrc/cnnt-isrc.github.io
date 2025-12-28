import Link from "next/link";

interface ProjectCardProps {
  projectName: string;
  lead: string;
  slug: string;
}

const ProjectCard = ({ projectName, lead, slug }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer h-full">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 sm:mb-3">
          {projectName}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          <span className="font-semibold text-gray-200">Lead:</span> {lead}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
