"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-line" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-cyan text-[#05060f]">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-lg">{BRAND.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Book a Free Call</Button>
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full">Book a Free Call</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
