"use client";
import FilterComponent from "@/components/Filter";
import PageHeading from "@/components/PageHeading";
import ResultCount from "@/components/ResultCount";
import TimelineList from "@/components/TimelineList";
import { SOFTWARES_PUBLICATIONS_PAGE_TITLE, VARIANTS } from "@/content";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import { FilteredSoftwaresType } from "@/types";

export default function SoftwarePublicationsPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedYear,
    setSelectedYear,
    availableYears,
    filteredProjects,
    projectsByYear,
    sortedYears,
  } = useSearchFilter({ variant: VARIANTS.softwarePublications });
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 mb-8 mt-8 md:mb-12 md:mt-14">
      <PageHeading title={SOFTWARES_PUBLICATIONS_PAGE_TITLE} />
      <FilterComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        availableYears={availableYears}
        variant={VARIANTS.softwarePublications}
      />
      <ResultCount
        searchQuery={searchQuery}
        selectedYear={selectedYear}
        length={filteredProjects.length}
      />
      <TimelineList
        filteredProjects={filteredProjects as FilteredSoftwaresType}
        sortedYears={sortedYears}
        projectsByYear={projectsByYear}
        variant={VARIANTS.softwarePublications}
      />
    </section>
  );
}
