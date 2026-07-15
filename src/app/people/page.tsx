import Link from "next/link";
import { PeopleSectionGrid } from "@/components/person-tile";
// import { peopleSections, collaborators } from "@/lib/data";
import { peopleSections} from "@/lib/data";

export const metadata = {
  title: "People",
};

export default function PeoplePage() {
  return (
    <div className="py-10 md:py-22">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-puffin-navy md:text-3xl">
            People
          </h1>
          <p className="mt-2 max-w-xl text-mm text-puffin-gray">
            Meet the researchers behind Puffin Lab!
          </p>
        </header>

        {peopleSections.map((section) => (
          <PeopleSectionGrid
            key={section.title}
            title={section.title}
            people={section.people}
          />
        ))}

        {/* Collaborators — compact list */}
        {/* <section className="mb-10">
          <h2 className="mb-5 border-b border-puffin-blue/15 pb-2 text-base font-semibold uppercase tracking-wide text-puffin-navy">
            Collaborators & Affiliates
          </h2>
          <ul className="space-y-3">
            {collaborators.map((collab) => (
              <li
                key={collab.id}
                className="flex flex-wrap items-baseline gap-x-2 text-sm"
              >
                {collab.link ? (
                  <a
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-puffin-navy hover:text-puffin-sky hover:underline"
                  >
                    {collab.name}
                  </a>
                ) : (
                  <span className="font-medium text-puffin-navy">
                    {collab.name}
                  </span>
                )}
                <span className="text-puffin-gray/60">·</span>
                <span className="text-puffin-gray">{collab.affiliation}</span>
                <span className="text-puffin-gray/60">·</span>
                <span className="text-xs text-puffin-gray/80">
                  {collab.project}
                </span>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Join CTA */}
        <section className="rounded-lg border border-puffin-blue/10 bg-white px-6 py-8 text-center">
          <h2 className="text-lg font-semibold text-puffin-navy">
            Interested in joining the lab?
          </h2>
          <p className="mt-2 text-sm text-puffin-gray">
            We welcome undergraduate researchers, graduate students, and
            collaborators.
          </p>
          <Link
            href="/get-involved"
            className="mt-4 inline-flex items-center rounded-lg bg-puffin-navy px-5 py-2 text-sm font-medium text-white hover:bg-puffin-blue transition-colors"
          >
            Get Involved
          </Link>
        </section>
      </div>
    </div>
  );
}
