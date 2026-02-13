import type { Paper } from "@/types/research/research-types";

const DISPLAY_VENUE_NAMES = [
  "CVPR",
  "ICCV",
  "ECCV",
  "ICML",
  "ICLR",
  "NeurIPS",
  "NIPS",
  "AAAI",
  "WACV",
];
const VENUE_YEAR_REGEX = new RegExp(
  `(${DISPLAY_VENUE_NAMES.join("|")})\\s*(20\\d{2})`,
  "i"
);

/** Conference year from publisher (e.g. "CVPR 2025" -> 2025); falls back to paper.date. Safe for client. */
export function getPaperDisplayYear(paper: Paper): number {
  const pub = paper.publisher ?? "";
  const match = pub.match(VENUE_YEAR_REGEX);
  if (match) {
    const y = parseInt(match[2], 10);
    if (!Number.isNaN(y)) return y;
  }
  if (paper.date) {
    const y = new Date(paper.date).getFullYear();
    if (!Number.isNaN(y)) return y;
  }
  return 0;
}
