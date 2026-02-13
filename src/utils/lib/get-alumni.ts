import path from "path";
import { promises as fs } from "fs";
import type { AlumniEntry } from "@/types/alumni";
import { parseCSVLine } from "./parse-csv-line";

/**
 * Parses cbim_alumni.csv and returns alumni entries.
 * Uses the "scholar" column (Google Scholar or ResearchGate etc.) as personal page
 * when no separate homepage exists.
 */
export async function getAlumniFromCSV(): Promise<AlumniEntry[]> {
  const filePath = path.join(process.cwd(), "cbim_alumni.csv");
  const content = await fs.readFile(filePath, "utf8");
  const lines = content.split("\n").filter((line) => line.trim());

  const entries: AlumniEntry[] = [];
  const headerRow = 1; // second line is header: Alumni,Position,Year,...

  for (let i = 0; i < lines.length; i++) {
    if (i <= headerRow) continue;
    const cols = parseCSVLine(lines[i]);
    const name = cols[0]?.trim();
    if (!name) continue;

    const position = cols[1]?.trim() ?? "";
    const yearRaw = cols[2]?.trim();
    const year = yearRaw ? parseInt(yearRaw, 10) : 0;
    const supervisedBy = cols[3]?.trim() ?? "";
    const scholarUrl = cols[4]?.trim() || null;
    const currentPosition = cols[5]?.trim() ?? "";
    const thesis = cols[6]?.trim() ?? "";

    // Use scholar/profile URL as personal page (Google Scholar, ResearchGate, etc.)
    const personalPageUrl =
      scholarUrl && (scholarUrl.startsWith("http://") || scholarUrl.startsWith("https://"))
        ? scholarUrl
        : null;

    entries.push({
      name,
      position,
      year: Number.isNaN(year) ? 0 : year,
      supervisedBy,
      personalPageUrl,
      currentPosition,
      thesis,
    });
  }

  // Sort by year descending (most recent first)
  entries.sort((a, b) => b.year - a.year);
  return entries;
}
