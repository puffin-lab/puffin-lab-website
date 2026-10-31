export type BlogPost = {
  id: string; // unique, any short name
  title: string;
  date: string; // "YYYY-MM-DD"
  author?: string;
  coverImage?: string; // path under /public, e.g. "/images/news/my-post.jpg"
  content: string[]; // one string per paragraph
};

export const blogPosts: BlogPost[] = [
  {
    id: "example-1-post",
    title: "Example post: what we're working on",
    date: "2026-10-31",
    author: "Puffin Lab",
    content: [
      "This is the first paragraph of the post. Each string in this list becomes its own paragraph.",
      "This is the second paragraph. Add as many as you need.",
    ],
    coverImage:"/images/news/halloween-group.jpg"
  },
    {
    id: "example-2-post",
    title: "Example post: what we're working on",
    date: "2026-10-31",
    author: "Puffin Lab",
    content: [
      "This is the first paragraph of the second post. Each string in this list becomes its own paragraph.",
      "This is the second paragraph. Add as many as you need.",
    ],
  },
    {
    id: "example-3-post",
    title: "Example post: what we're working on",
    date: "2026-10-31",
    author: "Puffin Lab",
    content: [
      "This is the first paragraph of the third post. Each string in this list becomes its own paragraph.",
      "This is the second paragraph. Add as many as you need.",
    ],
  },
    {
    id: "example-4-post",
    title: "Example post: what we're working on",
    date: "2026-10-31",
    author: "Puffin Lab",
    content: [
      "This is the first paragraph of the fourth post. Each string in this list becomes its own paragraph.",
      "This is the second paragraph. Add as many as you need.",
    ],
  },
];


// Dates are stored as "YYYY-MM-DD". Format in UTC so they don't show
// a day early for visitors in US time zones.
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
