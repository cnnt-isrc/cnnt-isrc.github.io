"use client";
import { PageVariant } from "@/types";
import { Search, Calendar } from "lucide-react";

interface FilterComponentProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  availableYears: string[];
  variant: PageVariant;
  startDate?: string;
  setStartDate?: (value: string) => void;
  endDate?: string;
  setEndDate?: (value: string) => void;
}

const FilterComponent = ({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  availableYears,
  variant,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: FilterComponentProps) => {
  // Dynamic placeholder based on variant
  const getPlaceholder = () => {
    switch (variant) {
      case "projects":
        return "Search by project name or author...";
      case "software-publications":
        return "Search by name...";
      case "events":
        return "Search by event name...";
      default:
        return "Search...";
    }
  };

  const showDateRange = variant === "events";
  const showYearFilter = variant !== "events";

  return (
    <>
      <div className="mb-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md lg:max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:left-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder={getPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm sm:text-base"
            />
          </div>

          {/* Year Dropdown - for projects and software-publications */}
          {showYearFilter && (
            <div className="w-full sm:w-auto sm:min-w-[160px] lg:w-[200px]">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer text-sm sm:text-base"
              >
                <option value="all">All Years</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date Range - for events */}
          {showDateRange && setStartDate && setEndDate && (
            <>
              <div className="relative w-full sm:w-auto sm:min-w-[160px] lg:w-[200px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 sm:pl-10 sm:pr-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer text-sm sm:text-base"
                  placeholder="Start Date"
                />
              </div>
              <div className="relative w-full sm:w-auto sm:min-w-[160px] lg:w-[200px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 sm:pl-10 sm:pr-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer text-sm sm:text-base"
                  placeholder="End Date"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
