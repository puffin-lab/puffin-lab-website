import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/get-involved", label: "Get Involved" },
];

function PuffinLogo() {
  return (
    <span className="text-2xl" role="img" aria-label="Puffin">
      🐧
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-puffin-blue/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <PuffinLogo />
          <span className="text-lg font-semibold text-puffin-navy group-hover:text-puffin-blue transition-colors">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-puffin-gray hover:text-puffin-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex md:hidden items-center gap-4">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-puffin-gray hover:text-puffin-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-puffin-blue/10 bg-puffin-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PuffinLogo />
              <span className="text-lg font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteConfig.university}
              <br />
              {siteConfig.department}
              <br />
              {siteConfig.location}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-white/60">Contact: </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-puffin-sky hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="text-white/60">Director: </span>
              <a
                href={siteConfig.directorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-puffin-sky hover:underline"
              >
                zihanwu.com
              </a>
            </p>
            <p>
              <span className="text-white/60">GitHub: </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-puffin-sky hover:underline"
              >
                @puffin-lab
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-puffin-navy">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-puffin-gray max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-puffin-blue/10 px-3 py-0.5 text-xs font-medium text-puffin-blue">
      {children}
    </span>
  );
}

export function StatusBadge({
  status,
}: {
  status: "Active" | "Completed" | "Planning" | "Open" | "Closed" | string;
}) {
  const colors: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    Completed: "bg-gray-100 text-gray-600",
    Planning: "bg-yellow-100 text-yellow-800",
    Open: "bg-green-100 text-green-800",
    Closed: "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[status] ?? "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: import("@/lib/data").Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-xl border border-puffin-blue/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${featured ? "" : "flex flex-col"}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-puffin-navy">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      {project.years && (
        <p className="text-xs text-puffin-gray mb-2">{project.years}</p>
      )}
      <p className="text-sm text-puffin-gray leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <Tag>{project.theme}</Tag>
        {project.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      {project.team.length > 0 && (
        <p className="text-xs text-puffin-gray mb-2">
          <span className="font-medium">Team:</span> {project.team.join(", ")}
        </p>
      )}
      {project.collaborators && (
        <p className="text-xs text-puffin-gray mb-2">
          <span className="font-medium">Collaborators:</span>{" "}
          {project.collaborators}
        </p>
      )}
      {project.funding && (
        <p className="text-xs text-puffin-gray mb-2">
          <span className="font-medium">Funding:</span> {project.funding}
        </p>
      )}
      {project.publication && (
        <p className="text-xs text-puffin-gray mb-3">
          <span className="font-medium">Publication:</span> {project.publication}
        </p>
      )}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-puffin-sky hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function PersonCard({ person }: { person: import("@/lib/data").Person }) {
  return (
    <article className="rounded-xl border border-puffin-blue/10 bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-puffin-blue/10 flex items-center justify-center text-2xl text-puffin-gray">
          {person.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            "👤"
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-puffin-navy">
            {person.name}
          </h3>
          <p className="text-sm text-puffin-orange font-medium">{person.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-puffin-gray leading-relaxed">
        {person.bio}
      </p>
      {person.interests && person.interests.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-puffin-navy mb-1">
            Research Interests
          </p>
          <div className="flex flex-wrap gap-1.5">
            {person.interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </div>
      )}
      {person.projects && person.projects.length > 0 && (
        <p className="mt-3 text-xs text-puffin-gray">
          <span className="font-medium">Projects:</span>{" "}
          {person.projects.join(", ")}
        </p>
      )}
      {person.links && person.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {person.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-puffin-sky hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-puffin-navy to-puffin-blue text-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/85 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
