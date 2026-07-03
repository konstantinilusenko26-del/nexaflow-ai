"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, itemVariants } from "@/components/Reveal";
import { PROCESS_STEPS } from "@/lib/site-data";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Process"
          title="From idea to working automation"
          subtitle="A clear, proven path from first conversation to a system that runs itself."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.num} variants={itemVariants} className="relative">
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-panel text-cyan lg:mx-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="panel h-full rounded-2xl p-6">
                    <span className="text-sm font-bold text-gradient">{s.num}</span>
                    <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
