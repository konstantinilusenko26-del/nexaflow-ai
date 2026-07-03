"use client";

import { motion, useReducedMotion } from "framer-motion";
import { UserPlus, Cpu, Database, MessageSquareText, CheckCircle2 } from "lucide-react";
import { HERO_EVENTS } from "@/lib/site-data";

const STEPS = [
  { icon: UserPlus, label: "Lead Captured", meta: "Website form", tone: "from-cyan/25 to-cyan/5" },
  { icon: Cpu, label: "AI Processing", meta: "Qualifying intent", tone: "from-brand/25 to-brand/5" },
  { icon: Database, label: "CRM Updated", meta: "Contact synced", tone: "from-violet/25 to-violet/5" },
  { icon: MessageSquareText, label: "Customer Reply", meta: "Sent in 12s", tone: "from-cyan/25 to-brand/5" },
];

function Connector({ index, reduce }: { index: number; reduce: boolean | null }) {
  return (
    <div className="relative mx-auto h-6 w-px bg-line-strong">
      {!reduce && (
        <motion.span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 24], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export function AnimatedWorkflow() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="glow" style={{ inset: 0, background: "#6d5efc", opacity: 0.18 }} />

      <div className="glass ring-soft relative rounded-3xl p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">
            Live automation
          </span>
          <span className="flex items-center gap-1.5 text-xs text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> running
          </span>
        </div>

        <div className="flex flex-col items-stretch">
          {STEPS.map((s, i) => (
            <div key={s.label}>
              <motion.div
                className={`panel flex items-center gap-3 rounded-2xl bg-gradient-to-br ${s.tone} p-3.5`}
                initial={{ opacity: 0, x: reduce ? 0 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/8 text-ink">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{s.label}</p>
                  <p className="truncate text-xs text-muted">{s.meta}</p>
                </div>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-cyan/80" />
              </motion.div>
              {i < STEPS.length - 1 && <Connector index={i} reduce={reduce} />}
            </div>
          ))}
        </div>
      </div>

      {/* Floating event chips */}
      <FloatingChip text={HERO_EVENTS[0]} className="-left-3 top-8 sm:-left-10" delay={0.4} reduce={reduce} />
      <FloatingChip text={HERO_EVENTS[3]} className="-right-3 top-1/3 sm:-right-12" delay={1.1} reduce={reduce} />
      <FloatingChip text={HERO_EVENTS[1]} className="-right-2 bottom-10 sm:-right-8" delay={1.8} reduce={reduce} />
    </div>
  );
}

function FloatingChip({
  text,
  className,
  delay,
  reduce,
}: {
  text: string;
  className: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className={`absolute z-10 hidden items-center gap-2 rounded-full border border-line-strong bg-panel/90 px-3 py-1.5 text-xs font-medium text-ink shadow-lg backdrop-blur sm:flex ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
      animate={reduce ? { opacity: 1 } : { opacity: [0, 1, 1, 0.9], y: [10, 0, 0, -4] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, delay }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
      {text}
    </motion.div>
  );
}
