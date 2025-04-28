"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { RefObject } from "react";

interface TitleSectionProps {
  scrollYProgress: MotionValue<number>;
  titleScreenRef: RefObject<HTMLDivElement | null>;
}

export const TitleSection = ({
  scrollYProgress,
  titleScreenRef,
}: TitleSectionProps) => {
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={titleScreenRef}
      className="w-full h-[75vh] flex flex-col overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col items-center justify-center px-4 gap-y-6"
      >
        <div className="w-[700px] flex flex-col items-center justify-center text-center -translate-y-20">
          <h1 className="text-[120px] leading-[0.75] font-dm font-[1000] tracking-tighter">
            Your data runs the world
          </h1>
          <div className="mt-4">
            <p className="text-lg mb-4">Start earning from today</p>
            <button className="px-6 py-2 bg-black text-white rounded-full border border-amber-300">
              Download the app
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
