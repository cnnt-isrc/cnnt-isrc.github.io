import {
  PROJECTS_DATA,
  SOFTWARES_PUBLICATIONS_DATA,
  EVENTS_DATA,
  VARIANTS,
} from "@/content";
import { DataSourceType, PageVariant } from "@/types";

export interface FilterParams {
  searchQuery: string;
  selectedYear: string;
}

export interface FilteredProjectsResult {
  filteredProjects: DataSourceType;
  projectsByYear: Record<string, any[]>;
  sortedYears: string[];
}

const getDataSource = (variant: PageVariant) =>
  variant === VARIANTS.projects
    ? PROJECTS_DATA
    : variant === VARIANTS.softwarePublications
    ? SOFTWARES_PUBLICATIONS_DATA
    : EVENTS_DATA;

/**
 * Filters projects based on search query and year
 */

export function filterProjects(
  searchQuery: string,
  selectedYear: string,
  dataSource: DataSourceType,
  variant: PageVariant,
  startDate?: string,
  endDate?: string
): DataSourceType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return dataSource.filter((item: any) => {
    const query = searchQuery.toLowerCase();

    // Handle search based on variant
    let matchesSearch = false;
    if (variant === VARIANTS.projects) {
      matchesSearch =
        item.projectName?.toLowerCase().includes(query) ||
        item.lead?.toLowerCase().includes(query);
    } else if (variant === VARIANTS.softwarePublications) {
      matchesSearch = item.name?.toLowerCase().includes(query);
    } else if (variant === VARIANTS.events) {
      matchesSearch = item.eventName?.toLowerCase().includes(query);
    }

    // Handle year filtering (events use 'date' field)
    const itemYear =
      item.year ||
      (item.date ? new Date(item.date).getFullYear().toString() : "");
    const matchesYear = selectedYear === "all" || itemYear === selectedYear;

    // Handle date filtering for events
    let matchesDateRange = true;
    if (variant === VARIANTS.events && startDate && endDate && item.date) {
      const eventDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      // Normalize dates to remove time component (set to midnight)
      const normalizedEventDate = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
      const normalizedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const normalizedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      
      matchesDateRange = normalizedEventDate >= normalizedStart && normalizedEventDate <= normalizedEnd;
      
     
    }

    return matchesSearch && matchesYear && matchesDateRange;
  }) as DataSourceType;
}

/**
 * Groups projects by year
 */
export function groupProjectsByYear(
  projects: DataSourceType,
  variant: PageVariant
): Record<string, any[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return projects.reduce((acc: Record<string, any[]>, item: any) => {
    // Handle different data structures based on variant
    let year = "";
    if (variant === VARIANTS.events) {
      // Events use 'date' field
      year = item.date ? new Date(item.date).getFullYear().toString() : "";
    } else {
      // Projects and software-publications use 'year' field
      year = item.year || "";
    }

    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});
}

/**
 * Sorts years in descending order
 */
export function sortYears(projectsByYear: Record<string, any[]>): string[] {
  return Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));
}

/**
 * Main helper function that filters and organizes projects
 */
export function getFilteredProjects(
  searchQuery: string,
  selectedYear: string,
  variant: PageVariant,
  startDate: string,
  endDate: string,
): FilteredProjectsResult {
  const dataSource: DataSourceType = getDataSource(variant);
  const filteredProjects = filterProjects(
    searchQuery,
    selectedYear,
    dataSource,
    variant,
    startDate,
    endDate
  );
  const projectsByYear = groupProjectsByYear(filteredProjects, variant);
  const sortedYears = sortYears(projectsByYear);

  return {
    filteredProjects,
    projectsByYear,
    sortedYears,
  };
}

/**
 * Gets all available years from projects
 */
export function getAvailableYears(): string[] {
  const years = [...new Set(PROJECTS_DATA.map((project) => project.year))];
  return years.sort((a, b) => parseInt(b) - parseInt(a));
}

/**
 * Gets the date range from events (oldest to latest)
 */
export function getEventsDateRange(): { startDate: string; endDate: string } {
  if (EVENTS_DATA.length === 0) {
    const today = new Date().toISOString().split("T")[0];
    return { startDate: today, endDate: today };
  }

  const dates = EVENTS_DATA.map((event) => new Date(event.date).getTime());
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));

  return {
    startDate: minDate.toISOString().split("T")[0],
    endDate: maxDate.toISOString().split("T")[0],
  };
}

/**
 * Groups events by status (Past, Ongoing, Upcoming)
 */
export function groupEventsByStatus(
  events: DataSourceType
): Record<string, any[]> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return events.reduce((acc: Record<string, any[]>, event: any) => {
    const eventDate = new Date(event.date);
    const eventDay = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );

    let status = "";
    if (eventDay < today) {
      status = "Past";
    } else if (eventDay.getTime() === today.getTime()) {
      status = "Ongoing";
    } else {
      status = "Upcoming";
    }

    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(event);
    return acc;
  }, {});
}

/**
 * Returns sorted event statuses in order: Upcoming, Ongoing, Past
 */
export function getEventStatusOrder(): string[] {
  return ["Upcoming", "Ongoing", "Past"];
}
