import Link from "next/link";
import { SectionHeading, ProjectCard } from "@/components/layout";
import {
  siteConfig,
  projects,
  news,
  aboutLab,
} from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.status === "Active").slice(0, 3);
  const recentNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-puffin-navy via-puffin-blue to-puffin-sky text-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl" role="img" aria-label="Puffin">
              🐧
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl leading-relaxed">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 text-white/70">
            {siteConfig.university} · {siteConfig.department}
          </p>
        </div>
      </section>

      {/* About the Lab */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="About the Lab" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-puffin-gray leading-relaxed">
              <p>{aboutLab.what}</p>
              <p>{aboutLab.why}</p>
            </div>
            <div className="space-y-4 text-puffin-gray leading-relaxed">
              <p>{aboutLab.approach}</p>
              <p>{aboutLab.communities}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/people"
              className="inline-flex items-center rounded-lg bg-puffin-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-puffin-blue transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-lg border border-puffin-navy px-5 py-2.5 text-sm font-medium text-puffin-navy hover:bg-puffin-navy hover:text-white transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="Current research projects at the intersection of HCI and computing education."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/research"
              className="text-sm font-medium text-puffin-sky hover:underline"
            >
              View all research →
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="News"
            subtitle="Recent updates from the lab."
          />
          <div className="space-y-4">
            {recentNews.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-puffin-blue/10 bg-white p-5 shadow-sm"
              >
                <time
                  dateTime={item.date}
                  className="text-xs font-medium text-puffin-orange"
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-1 text-lg font-semibold text-puffin-navy">
                  {item.headline}
                </h3>
                {item.details && (
                  <p className="mt-2 text-sm text-puffin-gray">{item.details}</p>
                )}
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-2 inline-block text-sm font-medium text-puffin-sky hover:underline"
                  >
                    {item.link.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
