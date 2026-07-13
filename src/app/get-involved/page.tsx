import Link from "next/link";
import {
  PageHero,
  SectionHeading,
  StatusBadge,
} from "@/components/layout";
import { siteConfig, opportunities } from "@/lib/data";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolvedPage() {
  const showResearchParticipants = opportunities.summary.some(
    (o) =>
      o.type === "Research studies" &&
      o.status.toLowerCase() !== "no active recruitment"
  );

  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Find the right opportunity for you — whether you're a student, educator, researcher, or study participant."
      />

      {/* Current Opportunities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Current Opportunities" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.summary.map((item) => (
              <div
                key={item.type}
                className="flex items-center justify-between rounded-xl border border-puffin-blue/10 bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-sm font-medium text-puffin-navy">
                  {item.type}
                </span>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current University Students */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Current University Students" />
          <div className="prose prose-sm max-w-none text-puffin-gray space-y-4">
            <p>
              We offer research opportunities for undergraduate and graduate
              students at the University of Maine interested in HCI, computing
              education, and educational technology.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              Types of Research Work
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designing and prototyping educational tools</li>
              <li>Conducting user studies and classroom evaluations</li>
              <li>Analyzing qualitative and quantitative research data</li>
              <li>Literature reviews and research writing</li>
            </ul>
            <h3 className="text-base font-semibold text-puffin-navy">
              Relevant Backgrounds
            </h3>
            <p>
              Computer science, human-centered technology design, education,
              psychology, or related fields. Experience with programming,
              UX design, or research methods is helpful but not required.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              Time Commitment
            </h3>
            <p>
              Typically 5–10 hours per week for at least one semester.
              Summer research positions may also be available.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              Compensation Options
            </h3>
            <p>
              Paid positions, course credit, independent study, or volunteer
              arrangements depending on availability and student preference.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              How to Apply
            </h3>
            <p>
              Fill out our{" "}
              <a href="#" className="text-puffin-sky hover:underline">
                interest form for on-campus research assistant positions
              </a>
              . Include your year, major, relevant coursework or experience,
              and what you hope to gain from research.
            </p>
          </div>
        </div>
      </section>

      {/* Prospective PhD Students */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Prospective PhD Students" />
          <div className="rounded-xl border border-puffin-blue/10 bg-white p-8 shadow-sm space-y-4 text-puffin-gray">
            {opportunities.phdRecruiting ? (
              <>
                <p className="text-lg font-medium text-puffin-navy">
                  We are recruiting PhD students for {opportunities.phdTerm}.
                </p>
                <p>
                  The lab is part of the{" "}
                  <strong>{opportunities.phdProgram}</strong> at the University
                  of Maine. We seek students interested in HCI, computing
                  education, and the design of educational technologies.
                </p>
                <h3 className="text-base font-semibold text-puffin-navy">
                  Research Alignment
                </h3>
                <p>
                  Ideal candidates are excited about designing and evaluating
                  tools for novice computing learners, with interests in
                  scaffolding, feedback, AI in education, or participatory
                  design with educators.
                </p>
                <h3 className="text-base font-semibold text-puffin-navy">
                  Before You Apply
                </h3>
                <p>
                  Please fill out our{" "}
                  <a href="#" className="text-puffin-sky hover:underline">
                    form for prospective PhD students
                  </a>{" "}
                  so we can learn about your research interests, skills, and
                  goals. We encourage you to contact the director before
                  submitting your official application.
                </p>
                <h3 className="text-base font-semibold text-puffin-navy">
                  What to Include in Your Email
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Brief description of your research interests</li>
                  <li>Relevant experience (research, industry, teaching)</li>
                  <li>Why you want to pursue a PhD and work with our lab</li>
                  <li>CV or resume</li>
                </ul>
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={opportunities.programLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-puffin-sky hover:underline"
                  >
                    PhD Program Information →
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-puffin-sky hover:underline"
                  >
                    Application Portal →
                  </a>
                </div>
              </>
            ) : (
              <p>
                We are not currently recruiting PhD students. Please check
                back or contact us to express interest for future cycles.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Educators and Community Partners */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Educators & Community Partners" />
          <div className="text-puffin-gray space-y-4">
            <p>
              We partner with educators and community organizations to co-design
              and evaluate educational tools in authentic learning contexts.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              Types of Partnerships
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interviews about teaching practices and learner needs</li>
              <li>Co-design workshops for educational tool development</li>
              <li>Classroom studies and pilot testing</li>
              <li>Professional development sessions</li>
              <li>Collaborative grant proposals</li>
            </ul>
            <h3 className="text-base font-semibold text-puffin-navy">
              What Participation Involves
            </h3>
            <p>
              Partnerships are tailored to your context and capacity. Activities
              may range from a single interview to semester-long classroom
              collaborations. We prioritize minimal disruption to your teaching.
            </p>
            <p>
              To begin a conversation, email us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-puffin-sky hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              with a brief description of your context and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Research Participants — hidden when no active recruitment */}
      {showResearchParticipants && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Research Participants" />
            <div className="rounded-xl border border-puffin-blue/10 bg-white p-8 shadow-sm">
              <p className="text-puffin-gray">
                Placeholder for active study recruitment details.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Research Collaborators */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Research Collaborators" />
          <div className="text-puffin-gray space-y-4">
            <p>
              We welcome collaborations with researchers in HCI, computing
              education, learning sciences, and related fields.
            </p>
            <h3 className="text-base font-semibold text-puffin-navy">
              Areas for Collaboration
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Educational tool design and evaluation</li>
              <li>Parsons problems and programming feedback</li>
              <li>AI in computing education</li>
              <li>Large-scale classroom studies</li>
            </ul>
            <p>
              See our{" "}
              <Link href="/research" className="text-puffin-sky hover:underline">
                research page
              </Link>{" "}
              for current projects, and reach out to discuss potential
              collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-puffin-navy text-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Contact" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 text-white/85">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-puffin-sky hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong className="text-white">University:</strong>{" "}
                {siteConfig.university}
              </p>
              <p>
                <strong className="text-white">Department:</strong>{" "}
                {siteConfig.department}
              </p>
              <p>
                <strong className="text-white">Location:</strong>{" "}
                {siteConfig.location}
              </p>
            </div>
            <div className="text-white/85 text-sm leading-relaxed">
              <p className="font-medium text-white mb-2">
                What to include in your inquiry:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your role (student, educator, researcher, etc.)</li>
                <li>Brief description of your interests or goals</li>
                <li>Relevant background or experience</li>
                <li>Your timeline or availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
