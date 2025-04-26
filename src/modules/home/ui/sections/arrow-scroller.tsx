"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ArrowScroller = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers during full scroll through section
  });

  // Move from -100vw (offscreen left) → 100vw (offscreen right)
  const x = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-full h-screen z-50 overflow-hidden"
    >
      <motion.div
        style={{ x }}
        className="w-full h-full flex items-center justify-center"
      >
        <p className="text-white text-[120px] font-bold">⬅️⬅️⬅️⬅️⬅️</p>
      </motion.div>
    </div>
  );
};
