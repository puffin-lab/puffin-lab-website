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
        <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-puffin-blue/10 ring-offset-2 ring-offset-puffin-cream transition-shadow group-hover:ring-puffin-sky/40">
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
            className="pointer-events-none absolute inset-0 rounded-full bg-puffin-navy/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            aria-hidden="true"
          >
            {person.hoverItems.map((item, i) => (
              <span
                key={`${item.emoji}-${i}`}
                className={`absolute text-xl drop-shadow-sm transition-transform duration-200 group-hover:scale-110 ${HOVER_POSITIONS[i % HOVER_POSITIONS.length]}`}
                title={item.label}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="mt-2.5 text-sm font-semibold leading-tight text-puffin-navy">
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

      <p className="mt-0.5 text-xs leading-snug text-puffin-gray">{person.role}</p>

      {person.affiliation && (
        <p className="mt-0.5 text-[11px] leading-snug text-puffin-gray/70">
          {person.affiliation}
        </p>
      )}

      <span className="mt-2 inline-block rounded-full bg-puffin-orange/10 px-2.5 py-0.5 text-[10px] font-medium leading-tight text-puffin-orange">
        {person.interestTag}
      </span>

      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 text-[11px] font-medium text-puffin-sky hover:underline"
          aria-label={`${person.name}'s website`}
        >
          Website ↗
        </a>
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
    <section className="mb-10 last:mb-0">
      <h2 className="mb-5 border-b border-puffin-blue/15 pb-2 text-base font-semibold text-puffin-navy">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {people.map((person) => (
          <PersonTile key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
