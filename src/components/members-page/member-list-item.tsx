import Link from "next/link";

export interface MemberListItemPerson {
  id: number;
  name: string;
  personalPageUrl: string;
  position: string;
  enrollYear: number;
  interest: string;
}

interface MemberListItemProps {
  readonly person: MemberListItemPerson;
}

export default function MemberListItem({ person }: MemberListItemProps) {
  const hasLink =
    person.personalPageUrl &&
    (person.personalPageUrl.startsWith("http") || person.personalPageUrl.startsWith("/"));

  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 border-b border-gray-100 last:border-b-0">
      <span className="font-medium text-gray-900">
        {hasLink ? (
          <Link
            href={person.personalPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-red hover:underline"
          >
            {person.name}
          </Link>
        ) : (
          person.name
        )}
      </span>
      {person.interest && (
        <span className="text-sm text-gray-600">— {person.interest}</span>
      )}
      <span className="text-sm text-gray-500">({person.enrollYear})</span>
    </div>
  );
}
