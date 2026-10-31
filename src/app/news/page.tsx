import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/layout";
import { news, type NewsItem } from "@/lib/data";
import { NewsPosts, formatDate } from "@/lib/newsPosts";
import { PostsViewer } from "@/components/posts-viewer";

export const metadata = {
  title: "News",
};

const LATEST_UPDATES_COUNT = 3;

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
      <h3 className="mt-1 text-lg font-semibold text-puffin-navy">{item.headline}</h3>
      {item.details && (
        <p className="mt-2 text-sm text-puffin-gray leading-relaxed">{item.details}</p>
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
  const sortedPosts = [...NewsPosts].sort((a, b) => b.date.localeCompare(a.date));
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, LATEST_UPDATES_COUNT);

  return (
    <>
      <PageHero
        title="News"
        subtitle="Updates, publications, and milestones from the Puffin Lab."
      />

     {/* Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Posts" />
          <PostsViewer posts={sortedPosts} />
        </div>
      </section>

      {/* Previous Updates */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Previous Updates" />
          <div className="space-y-4">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
