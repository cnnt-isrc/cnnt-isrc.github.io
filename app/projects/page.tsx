"use client";
import PageHeading from "@/components/PageHeading";
import FilterComponent from "@/components/Filter";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import ResultCount from "@/components/ResultCount";
import TimelineList from "@/components/TimelineList";
import { PROJECTS_PAGE_TITLE, VARIANTS } from "@/content";
import { FilteredProjectsType } from "@/types";

export default function ProjectsPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedYear,
    setSelectedYear,
    availableYears,
    filteredProjects,
    projectsByYear,
    sortedYears,
  } = useSearchFilter({ variant: VARIANTS.projects });
  const length = filteredProjects?.length;
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 mb-8 mt-8 md:mb-12 md:mt-14">
      <PageHeading title={PROJECTS_PAGE_TITLE} />
      <FilterComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        availableYears={availableYears}
        variant={VARIANTS.projects}
      />
      <ResultCount
        searchQuery={searchQuery}
        selectedYear={selectedYear}
        length={length}
      />
      <TimelineList
        filteredProjects={filteredProjects as FilteredProjectsType}
        sortedYears={sortedYears}
        projectsByYear={projectsByYear}
        variant={VARIANTS.projects}
      />
    </section>
  );
}
