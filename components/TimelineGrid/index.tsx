import ProjectCard from "../ProjectCard";
import DetailCard from "../DetailCard";
import { PageVariant, ProjectsByYearType, SoftwareType } from "@/types";
import { VARIANTS } from "@/content";

type TimelineGridProps = {
  projectsByYear: ProjectsByYearType;
  year: string;
  variant: PageVariant;
};
const TimelineGrid = ({ projectsByYear, year, variant }: TimelineGridProps) => (
  <div className="ml-8 sm:ml-16 md:ml-28">
    {variant === VARIANTS.softwarePublications ? (
      <div className="space-y-4">
        {(projectsByYear[year] as unknown as SoftwareType[]).map((item) => (
          <DetailCard
            key={item.name}
            name={item.name}
            description={item.description}
            link={item.link}
            year={item.year}
          />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {projectsByYear[year].map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            projectName={project.projectName}
            lead={project.lead}
          />
        ))}
      </div>
    )}
  </div>
);

export default TimelineGrid;
