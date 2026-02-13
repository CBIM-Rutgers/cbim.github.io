import Link from "next/link";
import type { AlumniEntry } from "@/types/alumni";

interface AlumniListItemProps {
  readonly entry: AlumniEntry;
}

export default function AlumniListItem({ entry }: AlumniListItemProps) {
  const hasLink = !!entry.personalPageUrl;

  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 border-b border-gray-100 last:border-b-0">
      <span className="font-medium text-gray-900">
        {hasLink ? (
          <Link
            href={entry.personalPageUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-red hover:underline"
          >
            {entry.name}
          </Link>
        ) : (
          entry.name
        )}
      </span>
      {entry.year > 0 && (
        <span className="text-sm text-gray-500">({entry.year})</span>
      )}
      {entry.currentPosition && (
        <span className="text-sm text-gray-600 font-bold">— {entry.currentPosition}</span>
      )}
    </div>
  );
}
