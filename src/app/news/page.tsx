import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/layout";
import { news, type NewsItem } from "@/lib/data";

export const metadata = {
  title: "News",
};

// Dates are stored as "YYYY-MM-DD". Format in UTC so they don't show
// a day early for visitors in US time zones.
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function NewsLink({ link }: { link: NonNullable<NewsItem["link"]> }) {
  const className = "text-xs font-medium text-puffin-sky hover:underline";

  // External links open in a new tab; internal links use Next's <Link>
  if (link.href.startsWith("http")) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label} →
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label} →
    </Link>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="rounded-xl border border-puffin-blue/10 bg-white p-6 shadow-sm">
      <time dateTime={item.date} className="text-sm font-bold text-puffin-orange">
        {formatDate(item.date)}
      </time>
      <h3 className="mt-1 text-lg font-semibold text-puffin-navy">
        {item.headline}
      </h3>
      {item.details && (
        <p className="mt-2 text-sm text-puffin-gray leading-relaxed">
          {item.details}
        </p>
      )}
      {item.link && (
        <div className="mt-3">
          <NewsLink link={item.link} />
        </div>
      )}
    </article>
  );
}

export default function NewsPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        title="News"
        subtitle="Updates, publications, and milestones from the Puffin Lab."
      />

      {/* All News */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Latest Updates" />
          {sortedNews.length > 0 ? (
            <div className="space-y-4">
              {sortedNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-puffin-gray">No news yet. Check back soon!</p>
          )}
        </div>
      </section>
    </>
  );
}
