/**
 * Parse a single CSV line respecting double-quoted fields (which may contain commas).
 */
export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if ((c === "," && !inQuotes) || (c === "\r" && !inQuotes)) {
      result.push(current.trim());
      current = "";
    } else if (c !== "\r") {
      current += c;
    }
  }
  result.push(current.trim());
  return result;
}
