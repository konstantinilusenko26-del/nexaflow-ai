"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, itemVariants } from "@/components/Reveal";
import { PROBLEMS } from "@/lib/site-data";

export function Problems() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Your team should not waste time on repetitive work"
          subtitle="Manual processes quietly drain hours, slow you down and cap how much you can grow."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                variants={itemVariants}
                className="panel panel-hover flex h-full flex-col rounded-2xl p-6"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet/25 to-brand/10 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </motion.article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
