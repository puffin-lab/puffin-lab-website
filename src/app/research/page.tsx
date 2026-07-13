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
            subtitle="Active and recently completed research projects."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {activeProjects.map((project) => (
              <div key={project.id} className="space-y-4">
                {/* Placeholder image area */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-puffin-blue/20 to-puffin-sky/20 flex items-center justify-center border border-puffin-blue/10">
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
