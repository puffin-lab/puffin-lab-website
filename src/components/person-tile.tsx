"use client";

import type { Person } from "@/lib/data";

const HOVER_POSITIONS = [
  "top-[8%] left-[12%]",
  "top-[5%] right-[10%]",
  "top-[38%] right-[2%]",
  "bottom-[12%] right-[14%]",
  "bottom-[8%] left-[38%]",
  "bottom-[14%] left-[8%]",
  "top-[40%] left-[2%]",
];

function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-puffin-blue/30 to-puffin-sky/40 text-lg font-semibold text-puffin-navy">
      {initials}
    </div>
  );
}

export function PersonTile({ person }: { person: Person }) {
  const websiteLink = person.website ?? person.links?.find((l) =>
    l.label.toLowerCase().includes("website")
  )?.href;

  return (
    <article
      className="group flex flex-col items-center text-center outline-none"
      tabIndex={person.hoverItems?.length ? 0 : undefined}
    >
      <div className="relative aspect-square w-full max-w-[128px]">
        <div className="h-full w-full overflow-hidden rounded-lg ring-2 ring-puffin-blue/10 ring-offset-1 ring-offset-puffin-cream transition-shadow group-hover:ring-puffin-sky/40">
          {person.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <PhotoPlaceholder name={person.name} />
          )}
        </div>

        {person.hoverItems && person.hoverItems.length > 0 && (
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-puffin-navy/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            aria-hidden="true"
          >
            {person.hoverItems.map((item, i) => (
              <span
                key={`${item.emoji}-${i}`}
                className={`absolute text-lg drop-shadow-sm transition-transform duration-200 group-hover:scale-110 ${HOVER_POSITIONS[i % HOVER_POSITIONS.length]}`}
                title={item.label}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="mt-2 line-clamp-2 text-mm font-semibold leading-tight text-puffin-navy">
        {websiteLink ? (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-puffin-sky hover:underline"
          >
            {person.name}
          </a>
        ) : (
          person.name
        )}
      </h3>

      <p className="mt-0.5 line-clamp-1 text-sm leading-tight text-puffin-gray">{person.role}</p>
      <p className="mt-0.5 line-clamp-1 text-sm leading-tight text-puffin-gray">{person.affiliation}</p>
      {person.interestTag && (
        <span className="mt-0.5 inline-block rounded-full bg-puffin-orange/10 px-2 py-0.5 text-[12px] font-medium leading-tight text-puffin-orange">
          {person.interestTag}
        </span>
      )}

    </article>
  );
}

export function PeopleSectionGrid({
  title,
  people,
}: {
  title: string;
  people: Person[];
}) {
  if (people.length === 0) return null;

  return (
    <section className="mb-12 last:mb-0">
      <h2 className="mb-4 border-b border-puffin-blue/15 pb-2 text-sm font-semibold uppercase tracking-wide text-puffin-navy">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <PersonTile key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
