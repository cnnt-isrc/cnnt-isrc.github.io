import { useState, useMemo } from "react";
import {
  getFilteredProjects,
  getAvailableYears,
  getEventsDateRange,
} from "@/lib/filterProjects";
import { PageVariant } from "@/types";
import { VARIANTS } from "@/content";

export function useSearchFilter({ variant }: { variant: PageVariant }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Initialize date range for events
  const dateRange = useMemo(() => {
    if (variant === VARIANTS.events) {
      return getEventsDateRange();
    }
    return { startDate: "", endDate: "" };
  }, [variant]);

  const [startDate, setStartDate] = useState<string>(dateRange.startDate);
  const [endDate, setEndDate] = useState<string>(dateRange.endDate);

  const availableYears = useMemo(() => getAvailableYears(), []);

  const { filteredProjects, projectsByYear, sortedYears } = useMemo(
    () => getFilteredProjects(searchQuery, selectedYear, variant,startDate,endDate),
    [searchQuery, selectedYear, variant,startDate,endDate],
  );

  return {
    searchQuery,
    setSearchQuery,
    selectedYear,
    setSelectedYear,
    availableYears,
    filteredProjects,
    projectsByYear,
    sortedYears,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };
}
