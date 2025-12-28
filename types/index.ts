import {
  PROJECTS_DATA,
  SOFTWARES_PUBLICATIONS_DATA,
  EVENTS_DATA,
} from "@/content";

export type PageVariant = "projects" | "software-publications" | "events";

export type FilteredProjectsType = typeof PROJECTS_DATA;
export type FilteredSoftwaresType = typeof SOFTWARES_PUBLICATIONS_DATA;
export type FilteredEventsType = typeof EVENTS_DATA;
export type ProjectsByYearType = Record<string, typeof PROJECTS_DATA>;

export type EventType = (typeof EVENTS_DATA)[number];
export type SoftwareType = (typeof SOFTWARES_PUBLICATIONS_DATA)[number];

export type DataSourceType =
  | FilteredProjectsType
  | FilteredSoftwaresType
  | FilteredEventsType;
