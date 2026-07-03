"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { itemVariants } from "@/components/Reveal";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="panel panel-hover group relative flex flex-col overflow-hidden rounded-2xl p-6"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/25 to-cyan/15 text-ink">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">{service.desc}</p>

      <ul className="mt-5 flex flex-col gap-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-ink/85">
            <Check className="h-4 w-4 shrink-0 text-cyan" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan transition-colors hover:text-ink"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  );
}
