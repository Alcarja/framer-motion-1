"use client";

import {
  motion,
  useMotionValueEvent,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useState, RefObject } from "react";
import { LockIcon, UnlockIcon } from "lucide-react";

interface PurpleSectionProps {
  scrollY: MotionValue<number>;
  purpleSectionProgress: MotionValue<number>;
  purpleSectionRef: RefObject<HTMLDivElement | null>;
}

export const PurpleSection = ({
  scrollY,
  purpleSectionProgress,
  purpleSectionRef,
}: PurpleSectionProps) => {
  const purpleSectionWidth = useTransform(
    purpleSectionProgress,
    [0, 0.2],
    ["80%", "100%"]
  );

  const purpleSectionTextY = useTransform(
    purpleSectionProgress,
    [0, 0.2],
    [500, 0]
  );

  const purpleSectionTextOpacity = useTransform(
    scrollY,
    [23426, 23719],
    [0, 1]
  );

  const yellowBoxPosition = useTransform(
    purpleSectionProgress,
    [0.21, 0.22],
    [50, 0]
  );
  const yellowBoxOpacity = useTransform(
    purpleSectionProgress,
    [0.19, 0.2],
    [0, 1]
  );
  const yellowDivColor = useTransform(
    purpleSectionProgress,
    [0.21, 0.95],
    ["#FFC313", "#FF6D38"]
  );

  const progressBarWidth = useTransform(
    purpleSectionProgress,
    [0.21, 1],
    ["0%", "100%"]
  );
  const animatedPercent = useTransform(
    purpleSectionProgress,
    [0.21, 0.95],
    [1, 100]
  );
  const [percent, setPercent] = useState(1);
  useMotionValueEvent(animatedPercent, "change", (latest) =>
    setPercent(Math.round(latest))
  );

  const purpleSectionIcon1XPosition = useTransform(
    purpleSectionProgress,
    [0.27, 0.3],
    [50, 0]
  );
  const purpleSectionIcon1Opacity = useTransform(
    purpleSectionProgress,
    [0.27, 0.28],
    [0, 1]
  );
  const purpleSectionIcon1BgColor = useTransform(
    purpleSectionProgress,
    [0.8, 0.85],
    ["#FD6D38", "#40b650"]
  );

  const purpleSectionIcon2XPosition = useTransform(
    purpleSectionProgress,
    [0.3, 0.33],
    [50, 0]
  );
  const purpleSectionIcon2Opacity = useTransform(
    purpleSectionProgress,
    [0.3, 0.31],
    [0, 1]
  );

  const purpleSectionIcon3XPosition = useTransform(
    purpleSectionProgress,
    [0.35, 0.38, 0.9, 0.95],
    [50, 0, 0, 50]
  );
  const purpleSectionIcon3Opacity = useTransform(
    purpleSectionProgress,
    [0.33, 0.35, 0.9, 0.95],
    [0, 1, 1, 0]
  );

  const purpleSectionIcon4XPosition = useTransform(
    purpleSectionProgress,
    [0.41, 0.45, 0.9, 0.95],
    [50, 0, 0, 50]
  );

  const purpleSectionIcon4Opacity = useTransform(
    purpleSectionProgress,
    [0.38, 0.41, 0.9, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={purpleSectionRef}
      style={{ width: purpleSectionWidth }}
      className="w-full min-h-[520vh] bg-[#8584FF] mx-auto rounded-lg"
    >
      <div className="sticky top-1/2 -translate-y-1/2 flex flex-col h-auto w-full items-center justify-center py-10 px-100 text-center">
        <motion.p
          style={{ y: purpleSectionTextY, opacity: purpleSectionTextOpacity }}
          className="text-[130px] text-[#141414] leading-[0.8] font-dm font-[1000] tracking-tighter mb-[100px]"
        >
          Check your progress
        </motion.p>

        {/* Yellow Box */}
        <motion.div
          style={{
            x: yellowBoxPosition,
            opacity: yellowBoxOpacity,
            backgroundColor: yellowDivColor,
          }}
          className="w-[350px] h-auto border border-black rounded-md flex flex-col overflow-hidden px-8 py-4 mb-4"
        >
          {/* Percentage and status */}
          <div className="w-full flex flex-2 items-start justify-between mb-4">
            <div className="flex items-start gap-1">
              <p className="text-[#141414] font-dm font-[1000] text-[30px] leading-[0.8]">
                {percent.toString().padStart(2, "0")}
              </p>
              <p className="text-[#141414] font-dm font-[1000] text-[30px] leading-[0.8]">
                %
              </p>
            </div>
            <div className="text-[#141414] font-dm font-[1000] text-sm">
              {purpleSectionProgress.get() < 0.85
                ? "Accessing data..."
                : "Locked in"}
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="relative w-full h-[15px] border border-black rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full rounded-l-full bg-[#7A78FF]"
              />
            </div>
          </div>
        </motion.div>

        {/* purple Section Icons */}
        <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
          <motion.div
            style={{
              opacity: purpleSectionIcon1Opacity,
              x: purpleSectionIcon1XPosition,
              backgroundColor: purpleSectionIcon1BgColor,
            }}
            className="h-[50px] w-[50px] border border-black rounded-sm flex items-center justify-center"
          >
            {purpleSectionProgress.get() > 0.7 ? (
              <UnlockIcon className="h-[30px] w-[30px] text-black" />
            ) : (
              <LockIcon className="h-[30px] w-[30px] text-black" />
            )}
          </motion.div>

          <motion.div
            style={{
              opacity: purpleSectionIcon2Opacity,
              x: purpleSectionIcon2XPosition,
            }}
            className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-black flex items-center justify-center"
          >
            <p className="text-white font-dm font-[800] text-xl tracking-tighter">
              Satoshi Nakamoto
            </p>
          </motion.div>
        </div>

        {/* Email reveal */}
        <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
          {purpleSectionProgress.get() < 0.95 && (
            <motion.div
              style={{
                opacity: purpleSectionIcon3Opacity,
                x: purpleSectionIcon3XPosition,
              }}
              className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-transparent flex items-center justify-center"
            >
              <motion.p
                style={{ y: purpleSectionTextY }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-white font-dm font-[800] text-xl tracking-tighter"
              >
                {purpleSectionProgress.get() > 0.55
                  ? "···························"
                  : "satoshinakamoto@mail.com"}
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Password reveal */}
        <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
          {purpleSectionProgress.get() < 0.95 && (
            <motion.div
              style={{
                opacity: purpleSectionIcon4Opacity,
                x: purpleSectionIcon4XPosition,
              }}
              className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-transparent flex items-center justify-center"
            >
              <motion.p
                style={{ y: purpleSectionTextY }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-white font-dm font-[800] text-xl tracking-tighter"
              >
                {purpleSectionProgress.get() > 0.65
                  ? "·············"
                  : "Password123*?¿"}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
