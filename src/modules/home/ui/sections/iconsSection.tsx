"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { RefObject } from "react";
import {
  GhostIcon,
  MoveIcon,
  FilmIcon,
  BadgeIcon,
  FileIcon,
} from "lucide-react";

interface IconsSectionProps {
  scrollY: MotionValue<number>;
  iconsScreenRef: RefObject<HTMLDivElement | null>;
}

export const IconsSection = ({
  scrollY,
  iconsScreenRef,
}: IconsSectionProps) => {
  const scale = useTransform(scrollY, [400, 1200], [1, 0.4]);

  const icon1X = useTransform(scrollY, [1250, 1600], [0, -300]);
  const icon1Y = useTransform(scrollY, [1250, 1600], [0, -300]);
  const icon2X = useTransform(scrollY, [1250, 1600], [0, -10]);
  const icon2Y = useTransform(scrollY, [1250, 1600], [0, 550]);
  const icon3X = useTransform(scrollY, [1250, 1600], [0, 90]);
  const icon3Y = useTransform(scrollY, [1250, 1600], [0, -550]);
  const icon4X = useTransform(scrollY, [1250, 1600], [0, 90]);
  const icon4Y = useTransform(scrollY, [1250, 1600], [0, 630]);
  const icon5X = useTransform(scrollY, [1250, 1600], [0, 590]);
  const icon5Y = useTransform(scrollY, [1250, 1600], [0, 10]);

  const textOpacity = useTransform(scrollY, [1250, 1600], [0, 1]);
  const textY = useTransform(scrollY, [1250, 1600], [50, 0]);

  return (
    <div className="relative h-[600vh] w-full">
      <div
        ref={iconsScreenRef}
        className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-0"
      >
        <motion.div
          style={{ scale }}
          className="flex flex-row items-center justify-center gap-1"
        >
          <motion.div
            style={{ x: icon1X, y: icon1Y }}
            className="rounded-full bg-[#FFC313] w-60 h-60 flex items-center justify-center border border-black"
          >
            <GhostIcon className="w-50 h-50 text-black" />
          </motion.div>
          <motion.div
            style={{ x: icon2X, y: icon2Y }}
            className="rounded-full bg-[#7A78FF] w-60 h-60 flex items-center justify-center border border-black"
          >
            <MoveIcon className="w-50 h-50 text-black" />
          </motion.div>
          <motion.div
            style={{ x: icon3X, y: icon3Y }}
            className="rounded-full bg-[#04A552] w-60 h-60 flex items-center justify-center border border-black"
          >
            <FilmIcon className="w-50 h-50 text-black" />
          </motion.div>
          <motion.div
            style={{ x: icon4X, y: icon4Y }}
            className="rounded-full bg-[#FD6D38] w-60 h-60 flex items-center justify-center border border-black"
          >
            <BadgeIcon className="w-50 h-50 text-black" />
          </motion.div>
          <motion.div
            style={{ x: icon5X, y: icon5Y }}
            className="rounded-full bg-[#80fd38] w-60 h-60 flex items-center justify-center border border-black"
          >
            <FileIcon className="w-50 h-50 text-black" />
          </motion.div>
        </motion.div>

        {/* Centered Text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-md z-10"
        >
          <p className="text-lg mt-2 text-gray-700 leading-[0.75] font-dm font-[1000] tracking-tighter">
            You’re not just the product. You’re the owner.
          </p>
          <h2 className="text-[90px] text-black leading-[1] font-dm font-[1000] tracking-tighter">
            Empower the Future of Data
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
