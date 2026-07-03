"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, itemVariants } from "@/components/Reveal";
import { INTEGRATIONS } from "@/lib/site-data";

export function Integrations() {
  return (
    <section id="integrations" className="border-y border-line/60 py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.18em] text-muted">
            Works with the tools your business already uses
          </p>
        </Reveal>

        <RevealGroup
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          stagger={0.05}
        >
          {INTEGRATIONS.map((name) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="panel panel-hover flex items-center gap-2.5 rounded-full px-4 py-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan to-brand" />
              <span className="text-sm font-medium text-ink/85">{name}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
