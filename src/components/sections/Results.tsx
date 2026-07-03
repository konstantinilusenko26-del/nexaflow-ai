"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, itemVariants } from "@/components/Reveal";
import { RESULTS } from "@/lib/site-data";

export function Results() {
  return (
    <section id="results" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Results"
          title="Designed to make your business faster"
          subtitle="What thoughtful automation unlocks once it is running inside your workflow."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={itemVariants}
                className="panel panel-hover flex h-full flex-col rounded-2xl p-6"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/25 to-brand/10 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.desc}</p>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-8">
          <p className="text-center text-sm text-muted/80">
            Potential results depend on the specific workflow and implementation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
