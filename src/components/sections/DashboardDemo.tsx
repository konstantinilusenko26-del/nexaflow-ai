"use client";

import { motion } from "framer-motion";
import { Activity, Boxes, CircleDot } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  DASH_STATS,
  DASH_AUTOMATIONS,
  DASH_ACTIVITY,
  DASH_INTEGRATIONS,
} from "@/lib/site-data";

const CHART = [40, 62, 48, 75, 58, 88, 70, 95];

export function DashboardDemo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Live preview"
          title="Everything working in one place"
          subtitle="A clear view of every automation, lead and task — this is a visual demo of the dashboard we build for you."
        />

        <Reveal className="mt-14" y={40}>
          <div className="panel ring-soft overflow-hidden rounded-3xl">
            {/* window bar */}
            <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-sm font-medium text-muted">AI Automation Dashboard</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-cyan">
                <CircleDot className="h-3.5 w-3.5" /> All systems operational
              </span>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-3">
              {/* left: stats + automations + chart */}
              <div className="space-y-5 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-3">
                  {DASH_STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-line bg-white/[0.03] p-4">
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="mt-1 text-2xl font-bold text-gradient">{s.value}</p>
                      <p className="mt-0.5 text-xs text-cyan/80">{s.trend}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    <Boxes className="h-4 w-4 text-cyan" /> Active automations
                  </div>
                  <div className="space-y-3.5">
                    {DASH_AUTOMATIONS.map((a) => (
                      <div key={a.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-ink/85">{a.name}</span>
                          <span
                            className={
                              a.status === "Running"
                                ? "text-xs text-cyan"
                                : "text-xs text-muted"
                            }
                          >
                            {a.status}
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-brand to-cyan"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${a.load}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex h-28 items-end gap-2">
                    {CHART.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-cyan"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* right: activity + integrations */}
              <div className="space-y-5">
                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    <Activity className="h-4 w-4 text-cyan" /> Recent activity
                  </div>
                  <ul className="space-y-4">
                    {DASH_ACTIVITY.map((a) => (
                      <li key={a.text} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                        <div>
                          <p className="text-sm text-ink/85">{a.text}</p>
                          <p className="text-xs text-muted">{a.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm font-semibold">Integrations</p>
                  <div className="flex flex-wrap gap-2">
                    {DASH_INTEGRATIONS.map((i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-line bg-white/5 px-2.5 py-1 text-xs text-ink/80"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
