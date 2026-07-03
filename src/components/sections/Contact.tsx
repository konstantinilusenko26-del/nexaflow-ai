"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid business email"),
  company: z.string().min(1, "Please enter your company"),
  message: z.string().min(5, "Tell us a little more"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    // Demo only — no backend. Simulate a request.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-6">
        <div className="panel ring-soft relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            aria-hidden
            className="glow"
            style={{ width: 360, height: 360, top: -120, right: -80, background: "#6d5efc", opacity: 0.18 }}
          />

          <SectionHeading
            title="Ready to automate your business?"
            subtitle="Tell us what takes too much time in your business, and we will show you how it can be automated."
          />

          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-line bg-white/[0.03] p-10 text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan text-[#05060f]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold">Thanks — we got it!</h3>
                  <p className="text-sm text-muted">
                    We will review your request and get back to you shortly with ideas on what to
                    automate first.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send another request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2"
                >
                  <Field label="Name" error={errors.name?.message}>
                    <Input placeholder="Jane Cooper" {...register("name")} />
                  </Field>
                  <Field label="Business email" error={errors.email?.message}>
                    <Input type="email" placeholder="jane@company.com" {...register("email")} />
                  </Field>
                  <Field label="Company" error={errors.company?.message} className="sm:col-span-2">
                    <Input placeholder="Company Inc." {...register("company")} />
                  </Field>
                  <Field
                    label="What would you like to automate?"
                    error={errors.message?.message}
                    className="sm:col-span-2"
                  >
                    <Textarea
                      placeholder="e.g. Automatically qualify inbound leads and reply within a minute."
                      {...register("message")}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending…" : "Request a Free Consultation"}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#ff8fa3]">{error}</p>}
    </div>
  );
}
