import Link from "next/link";
import {
  siteConfig,
  projects,
  aboutLab,
  researchOverview,
} from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.status === "Active").slice(0, 4);

  const researchNews = [
    {
      id: "phd-recruiting",
      date: "2025-09-01",
      content: <>Recruiting PhD students for Fall 2026</>,
    },
    {
      id: "aied-2025",
      date: "2025-06-15",
      content: <>Paper accepted to <Link className="text-puffin-sky hover:underline" href="https://aied2025.itd.cnr.it/index.html">AIED 2025</Link></>,
    },
  ];

  const socialNews = [
    {
      id: "lab-launch",
      date: "2025-01-15",
      content: <>Puffin Lab launches at University of Maine</>,
    },
  ];

  return (
    <>
      {/* Hero Section - 2 Columns */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-5xl" role="img" aria-label="Puffin">
                  🐧
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-puffin-navy">
                {siteConfig.name}
              </h1>
              <p className="mt-3 text-lg text-puffin-gray leading-relaxed">
                {siteConfig.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/people"
                  className="inline-flex items-center rounded-lg bg-puffin-navy px-6 py-3 text-sm font-medium text-white hover:bg-puffin-blue transition-colors"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center rounded-lg border border-puffin-navy px-6 py-3 text-sm font-medium text-puffin-navy hover:bg-puffin-navy hover:text-white transition-colors"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            {/* Right Column - Introduction */}
            <div className="space-y-4 text-puffin-gray leading-relaxed">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-puffin-navy mb-2">
                  What
                </h2>
                <p>{aboutLab.what}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-puffin-navy mb-2">
                  Why
                </h2>
                <p>{aboutLab.why}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-puffin-navy mb-2">
                  Approach
                </h2>
                <p>{aboutLab.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes Section - 3 Columns */}
      <section className="py-12 md:py-16 bg-puffin-cream/50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-puffin-navy">
            Research Themes
          </h2>
          <p className="mb-8 text-puffin-gray">
            Our work focuses on these interconnected research areas.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {researchOverview.themes.map((theme, index) => (
              <div
                key={`theme-${index}`}
                className="rounded-lg border border-puffin-blue/15 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-puffin-navy">
                  {theme}
                </h3>
                <p className="mt-2 text-sm text-puffin-gray">
                  {/* Theme description placeholder */}
                  Research and development in this area.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-puffin-navy">
            Featured Projects
          </h2>
          <p className="mb-8 text-puffin-gray">
            Current research projects at the intersection of HCI and computing education.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-puffin-blue/15 bg-white p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-puffin-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-puffin-gray flex-grow">
                  {project.description}
                </p>
                <Link
                  href="/research"
                  className="mt-4 text-sm font-medium text-puffin-sky hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - 1 Column */}
      <section className="py-12 md:py-16 bg-puffin-cream/50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-puffin-navy">
            Recent Updates
          </h2>
          <p className="mb-8 text-puffin-gray">
            Latest news and updates from the lab.
          </p>
          <ul className="space-y-2 text-sm">
            {[...researchNews, ...socialNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-1"
              >
                <div className="items-baseline gap-3">
                  <time
                    dateTime={item.date}
                    className="whitespace-nowrap font-bold text-puffin-orange text-sm pr-2"
                  >
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}:
                  </time>
                  <span className="text-puffin-navy font-medium">{item.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News Section - 2 Columns */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-puffin-navy">
            Recent Updates
          </h2>
          <p className="mb-8 text-puffin-gray">
            Latest news and updates from the lab.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Research Events */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-puffin-navy">Research</h3>
              <ul className="space-y-2 text-sm">
                {researchNews.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1"
                  >
                    <div className="items-baseline gap-3">
                      <time
                        dateTime={item.date}
                        className="whitespace-nowrap font-bold text-puffin-orange text-sm pr-2"
                      >
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}:
                      </time>
                      <span className="text-puffin-navy font-medium">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Events */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-puffin-navy">Social</h3>
              <ul className="space-y-2 text-sm">
                {socialNews.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1"
                  >
                    <div className="items-baseline gap-3">
                      <time
                        dateTime={item.date}
                        className="whitespace-nowrap font-bold text-puffin-orange text-sm pr-2"
                      >
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}:
                      </time>
                      <span className="text-puffin-navy font-medium">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
