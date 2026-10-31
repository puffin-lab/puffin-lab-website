"use client";

import { useEffect, useState } from "react";
import { formatDate, type NewsPost } from "@/lib/newsPosts";

export function PostsViewer({ posts }: { posts: NewsPost[] }) {
  const [selectedId, setSelectedId] = useState(posts[0]?.id);

  // Open the post named in the URL, e.g. /news#example-post, so a post can be shared by link
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (posts.some((p) => p.id === id)) setSelectedId(id);
  }, [posts]);

  function selectPost(id: string) {
    setSelectedId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  const selected = posts.find((p) => p.id === selectedId) ?? posts[0];

  if (!selected) {
    return <p className="text-puffin-gray">No posts yet. Check back soon!</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-[16rem_1fr]">
      {/* Post list: a swipeable row on phones, a sticky column on desktop */}
      <nav aria-label="Posts" className="md:sticky md:top-24 md:self-start">
        <ul className="flex gap-2 overflow-x-auto pb-2 md:block md:space-y-2 md:overflow-visible md:pb-0">
          {posts.map((post) => {
            const isSelected = post.id === selected.id;
            return (
              <li key={post.id} className="w-56 shrink-0 md:w-auto">
                <button
                  type="button"
                  onClick={() => selectPost(post.id)}
                  aria-current={isSelected ? "true" : undefined}
                  className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                    isSelected
                      ? "border-puffin-navy bg-puffin-navy"
                      : "border-puffin-blue/10 bg-white hover:border-puffin-blue/30"
                  }`}
                >
                  <span
                    className={`block text-xs font-bold ${
                      isSelected ? "text-white/80" : "text-puffin-orange"
                    }`}
                  >
                    {formatDate(post.date)}
                  </span>
                  <span
                    className={`mt-0.5 block text-sm font-semibold ${
                      isSelected ? "text-white" : "text-puffin-navy"
                    }`}
                  >
                    {post.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Selected post */}
      <article className="overflow-hidden rounded-xl border border-puffin-blue/10 bg-white shadow-sm">
        {selected.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={selected.coverImage} alt="" className="aspect-video w-full object-cover" />
        )}
        <div className="p-6 md:p-8">
          <time dateTime={selected.date} className="text-sm font-bold text-puffin-orange">
            {formatDate(selected.date)}
          </time>
          <h3 className="mt-1 text-2xl font-semibold text-puffin-navy">{selected.title}</h3>
          {selected.author && (
            <p className="mt-1 text-xs text-puffin-gray">By {selected.author}</p>
          )}
          <div className="mt-4 space-y-4 text-puffin-gray leading-relaxed">
            {selected.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
