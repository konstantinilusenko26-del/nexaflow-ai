"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WORKFLOW_TABS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function WorkflowDemo() {
  const [active, setActive] = useState(WORKFLOW_TABS[0].key);
  const tab = WORKFLOW_TABS.find((t) => t.key === active) ?? WORKFLOW_TABS[0];

  return (
    <section id="solutions" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Solutions"
          title="See how automation transforms a workflow"
          subtitle="Switch between real-world scenarios and watch each process flow end to end."
        />

        <Reveal className="mt-12">
          <div className="mx-auto flex w-fit gap-1 rounded-2xl border border-line bg-white/5 p-1.5">
            {WORKFLOW_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors",
                  active === t.key ? "text-[#05060f]" : "text-muted hover:text-ink"
                )}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="wf-tab"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-brand to-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <div className="panel ring-soft rounded-3xl p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between"
              >
                {tab.steps.map((step, i) => (
                  <div key={step} className="flex flex-col items-stretch gap-3 lg:flex-1 lg:flex-row lg:items-center">
                    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-line bg-white/5 px-4 py-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand/30 to-cyan/20 text-xs font-bold text-ink">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-ink/90">{step}</span>
                    </div>
                    {i < tab.steps.length - 1 && (
                      <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 text-cyan/70 lg:rotate-0" />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
