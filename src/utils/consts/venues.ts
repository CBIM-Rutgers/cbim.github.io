/** Venues displayed on the publications page (CVPR, ICCV, ECCV, ICML, ICLR, NeurIPS, AAAI, WACV). */
export const VENUE_OPTIONS = [
  "CVPR",
  "ICCV",
  "ECCV",
  "ICML",
  "ICLR",
  "NeurIPS",
  "AAAI",
  "WACV",
] as const;

export type VenueOption = (typeof VENUE_OPTIONS)[number];

export const SORT_OPTIONS = [
  { value: "year-desc", label: "Year (newest first)" },
  { value: "year-asc", label: "Year (oldest first)" },
  { value: "venue", label: "Venue (A–Z)" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];
