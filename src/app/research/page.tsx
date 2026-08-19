import { PageHero, SectionHeading, ProjectCard, Tag } from "@/components/layout";
import { projects, researchOverview } from "@/lib/data";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  const activeProjects = projects.filter((p) => p.status !== "Completed");

  return (
    <>
      <PageHero
        title="Research"
        subtitle="Designing and evaluating educational tools for novice computing learners."
      />

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Research Overview" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-puffin-navy mb-3 uppercase tracking-wide">
                Central Research Questions
              </h3>
              <ul className="space-y-3">
                {researchOverview.centralQuestions.map((q) => (
                  <li
                    key={q}
                    className="flex gap-3 text-puffin-gray text-sm leading-relaxed"
                  >
                    <span className="text-puffin-orange mt-0.5">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-puffin-navy mb-3 uppercase tracking-wide">
                Our Approach
              </h3>
              <p className="text-puffin-gray text-sm leading-relaxed mb-6">
                {researchOverview.approach}
              </p>
              <h3 className="text-sm font-semibold text-puffin-navy mb-3 uppercase tracking-wide">
                Research Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchOverview.themes.map((theme) => (
                  <Tag key={theme}>{theme}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Current Projects"
          />
          <div
            className="relative mb-8 overflow-hidden rounded-xl border border-puffin-orange/30 bg-puffin-orange/5 px-5 py-4"
            role="status"
            aria-live="polite"
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-linear-to-r from-transparent via-puffin-orange/15 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                🚧
              </span>
              <div>
                <p className="font-semibold text-puffin-navy">
                  Projects under construction
                </p>
                <p className="mt-0.5 text-sm text-puffin-gray">
                  We are actively updating this section. Check back soon for updates or talk to us for more details!
                </p>
              </div>
              <span
                className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-puffin-orange animate-pulse"
                aria-label="Updating"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {activeProjects.map((project) => (
              <div key={project.id} className="space-y-4">
                {/* Placeholder image area */}
                <div className="aspect-video rounded-xl bg-linear-to-br from-puffin-blue/20 to-puffin-sky/20 flex items-center justify-center border border-puffin-blue/10">
                  <span className="text-puffin-gray text-sm">
                    Project image placeholder
                  </span>
                </div>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
