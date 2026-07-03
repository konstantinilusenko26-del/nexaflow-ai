"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Decorative animated glow blobs + faint grid. Purely visual, aria-hidden. */
export function BackgroundEffects() {
  const reduce = useReducedMotion();

  const float = (dx: number, dy: number) =>
    reduce
      ? {}
      : {
          animate: { x: [0, dx, 0], y: [0, dy, 0] },
          transition: { duration: 16, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="glow"
        style={{ width: 520, height: 520, top: -160, left: -120, background: "#5b3dfc", opacity: 0.4 }}
        {...float(60, 40)}
      />
      <motion.div
        className="glow"
        style={{ width: 460, height: 460, top: 120, right: -160, background: "#12b5c8", opacity: 0.3 }}
        {...float(-50, 50)}
      />
      <motion.div
        className="glow"
        style={{ width: 420, height: 420, bottom: -180, left: "40%", background: "#a855f7", opacity: 0.22 }}
        {...float(40, -40)}
      />
    </div>
  );
}
