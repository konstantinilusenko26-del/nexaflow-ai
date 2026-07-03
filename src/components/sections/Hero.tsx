import { Sparkles, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { AnimatedWorkflow } from "@/components/AnimatedWorkflow";
import { HERO_TRUST } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted">
              <Sparkles className="h-3.5 w-3.5 text-cyan" />
              AI AUTOMATION AGENCY
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Automate Your Business.
              <br />
              <span className="text-gradient">Scale Without Limits.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg text-muted">
              We design AI-powered systems that automate repetitive tasks, improve customer
              experience and help businesses grow faster.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="#contact" size="lg">
                Start Your Automation
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="#services" size="lg" variant="outline">
                Explore Our Solutions
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {HERO_TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-ink/80">
                  <Check className="h-4 w-4 text-cyan" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <AnimatedWorkflow />
        </Reveal>
      </div>
    </section>
  );
}
