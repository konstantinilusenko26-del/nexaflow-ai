"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <Reveal className="mt-12">
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="panel overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{item.q}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-cyan transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
