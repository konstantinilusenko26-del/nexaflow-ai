"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="AI automation built around your business"
          subtitle="Four ways we remove manual work and give your team hours back every week."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
