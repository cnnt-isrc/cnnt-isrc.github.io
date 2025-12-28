// ============================================================================
// HOME/LANDING PAGE
// ============================================================================
// Edit these values to change the main heading and news ticker on your home page

/** The main page heading - typically split across two lines for visual effect */
export const LANDING_PAGE_CONTENT = {
  // First part of the title (appears in normal text)
  title: "Cognitive Neuroscience &",

  // Second part of the title (appears highlighted/in different color)
  titleHighlight: "Neurotechnology",

  // Subtitle - appears below the main heading
  description: "Exploring the Frontiers of Mind and Machine",
};

// ============================================================================
// NEWS TICKER / ANNOUNCEMENTS
// ============================================================================
// The scrolling news items that appear on the home page
// Each news item needs:
//   - title: The announcement text
//   - url: The link when user clicks (use "/" if no specific link)
//
// EXAMPLE - To add a new announcement:
// {
//   title: "New research paper published in Science Magazine.",
//   url: "/projects",
// },
//
// To add a new announcement: add a new { title: "...", url: "..." } block
// To remove an announcement: delete the entire { title, url } block
// To edit an announcement: just change the title text

export const NEWS_TICKER_ITEMS = [
  {
    title: "PhD position open in Cognitive Neuroscience.",
    url: "/",
  },
  {
    title: "New publication accepted in Nature Human Behaviour.",
    url: "/",
  },
  {
    title: "Upcoming workshop on Computational Modelling.",
    url: "/",
  },
  {
    title: "Our lab received a major DST grant.",
    url: "/",
  },
];
