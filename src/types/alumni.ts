export interface AlumniEntry {
  name: string;
  position: string;
  year: number;
  supervisedBy: string;
  /** Google Scholar or other profile URL – used as personal page when no homepage exists */
  personalPageUrl: string | null;
  currentPosition: string;
  thesis: string;
}
