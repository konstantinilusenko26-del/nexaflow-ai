import { Zap, Briefcase, Mail } from "lucide-react";
import { NAV_LINKS, FOOTER_SERVICES, BRAND } from "@/lib/site-data";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-cyan text-[#05060f]">
                <Zap className="h-4 w-4" />
              </span>
              <span className="text-lg">{BRAND.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              We design AI-powered automation systems that help modern businesses cut manual work
              and scale with confidence.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-cyan hover:text-ink"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={BRAND.upwork}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-cyan hover:text-ink"
              >
                <Briefcase className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Navigation" links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))} />
          <FooterCol
            title="Services"
            links={FOOTER_SERVICES.map((s) => ({ label: s, href: "#services" }))}
          />

          <div>
            <p className="mb-4 text-sm font-semibold">Contact</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              {BRAND.email}
            </a>
            <p className="mt-4 text-sm text-muted">{BRAND.tagline}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
