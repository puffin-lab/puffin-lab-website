// import Link from "next/link";
import {
  PageHero,
  SectionHeading,
  // StatusBadge,
} from "@/components/layout";
import { siteConfig, opportunities } from "@/lib/data";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolvedPage() {
  // const showResearchParticipants = opportunities.summary.some(
  //   (o) =>
  //     o.type === "Research studies" &&
  //     o.status.toLowerCase() !== "no active recruitment"
  // );

  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Interested in our research? Get involved if you are an undergraduate student, a graduate student, or a teacher; we are excited to expand our lab and to look for collaboration opportunities!"
      />

      {/* Temporarily redirecting to director's website for details */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Get Involved" />
          <div className="rounded-xl border border-puffin-blue/10 bg-white p-8 shadow-sm text-puffin-gray">
            <p className="mb-4">
              We are currently migrating the detailed &quot;Get Involved&quot; content from
              Zihan&apos;s personal website to this site. If you are interested in joining Puffin Lab as a student researcher, please refer to Zihan&apos;s webpage for up-to-date information and
              application details. If you are a teacher and would like to see how to bring our research to your classroom, feel free to email us directly!
            </p>
            <a
              href={siteConfig.directorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-puffin-navy px-5 py-2 text-sm font-medium text-white hover:bg-puffin-blue transition-colors"
            >
              Visit Zihan&apos;s webpage →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
