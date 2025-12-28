import { PageVariant } from "@/types";

// ============================================================================
// SITE BASIC INFORMATION
// ============================================================================
// Change these values to update your lab/organization name and description
// These appear at the top of browser tabs and in search engine results

/** The official name of your lab/organization - appears in browser tab and page headers */
export const LAB_NAME = "CNNT ISRC";

/** A brief description of what your lab does - shows in Google search results and browser tab */
export const SITE_DESCRIPTION =
  "Computational Neuroscience and Neurotechnology Team - ISRC. Advancing brain research through cutting-edge computational methods and neurotechnology.";

/** Path to your website's favorite icon (the small icon shown in browser tabs) */
export const FAVICON_URL = "/favicon.ico";

// Internal configuration - do not modify unless you understand what you're doing
export const VARIANTS: Record<string, PageVariant> = {
  projects: "projects",
  softwarePublications: "software-publications",
  events: "events",
};
