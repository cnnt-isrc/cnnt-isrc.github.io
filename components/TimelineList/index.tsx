import Timeline from "../Timeline";
import TimelineDot from "../TimelineDot";
import TimelineGrid from "../TimelineGrid";
import EventsList from "../EventsList";
import {
  FilteredEventsType,
  FilteredProjectsType,
  FilteredSoftwaresType,
  PageVariant,
  ProjectsByYearType,
} from "@/types";
import { VARIANTS } from "@/content";

type TimelineListProps = {
  filteredProjects:
    | FilteredProjectsType
    | FilteredSoftwaresType
    | FilteredEventsType;
  sortedYears: string[];
  projectsByYear: ProjectsByYearType;
  variant: PageVariant;
};

const TimelineList = ({
  filteredProjects,
  sortedYears,
  projectsByYear,
  variant,
}: TimelineListProps) => {
  // Events variant - different UI
  if (variant === VARIANTS.events) {
    return (
      <EventsList filteredEvents={filteredProjects as FilteredEventsType} />
    );
  }

  // Default variant - projects and software-publications
  return filteredProjects.length === 0 ? (
    <div className="text-center py-12 px-6">
      <p className="text-gray-400 text-lg">
        No projects found matching your search.
      </p>
    </div>
  ) : (
    <div className="relative px-6">
      {/* Timeline vertical line */}
      <Timeline />
      <div className="space-y-16">
        {sortedYears.map((year) => (
          <div key={year} className="relative">
            {/* Timeline dot and year */}
            <TimelineDot year={year} />
            {/* Projects grid */}
            <TimelineGrid
              projectsByYear={projectsByYear}
              year={year}
              variant={variant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineList;
