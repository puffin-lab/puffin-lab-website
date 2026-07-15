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
        subtitle="Find the right opportunity for you — whether you're a student, educator, researcher, or study participant."
      />

      {/* Temporarily redirecting to director's website for details */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Get Involved" />
          <div className="rounded-xl border border-puffin-blue/10 bg-white p-8 shadow-sm text-puffin-gray">
            <p className="mb-4">
              We are currently migrating the detailed &quot;Get Involved&quot; content from
              Zihan&apos;s personal website to this site. If you are interested in joining Puffin Lab, please refer to Zihan&apos;s webpage for up-to-date information and
              application details.
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
