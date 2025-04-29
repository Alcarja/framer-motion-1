"use client";

import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { PlayIcon, ShoppingBasket, ThumbsUpIcon } from "lucide-react";
import { RefObject, useState } from "react";

interface GreenSectionProps {
  scrollY: MotionValue<number>;
  greenSectionRef: RefObject<HTMLDivElement | null>;
}

export const GreenSection = ({
  scrollY,
  greenSectionRef,
}: GreenSectionProps) => {
  const [showOrangeBottomDiv, setShowOrangeBottomDiv] = useState(false);
  const [showPurpleBottomDiv, setShowPurpleBottomDiv] = useState(false);

  const greenSectionProgress = useTransform(scrollY, (scrollYValue) => {
    const sectionTop = greenSectionRef.current?.offsetTop ?? 0;
    const sectionHeight = greenSectionRef.current?.offsetHeight ?? 1;
    return (scrollYValue - sectionTop) / sectionHeight;
  });

  const scaledProgress = useTransform(greenSectionProgress, (v) => v * 100);

  useMotionValueEvent(scaledProgress, "change", (latest) => {
    if (latest >= 29 && latest <= 40) {
      setShowOrangeBottomDiv(true);
    } else {
      setShowOrangeBottomDiv(false);
    }
  });

  useMotionValueEvent(scaledProgress, "change", (latest) => {
    if (latest >= 43 && latest <= 58) {
      setShowPurpleBottomDiv(true);
    } else {
      setShowPurpleBottomDiv(false);
    }
  });

  const greenSectionPosition = useTransform(scaledProgress, [3, 5], [-100, 0]);

  /* Orange DIV */
  const orangeDivWidth = useTransform(scaledProgress, [10, 15], [0, 250]);

  const orangeDivOpacity = useTransform(scaledProgress, [10, 15], [0, 1]);

  const orangeDivContentOpacity = useTransform(
    scaledProgress,
    [14, 15],
    [0, 1]
  );

  const orangeBottomDivScale = useTransform(
    scaledProgress,
    [29, 33, 38, 40],
    [0.1, 1, 1, 0.1]
  );

  const orangeBottomDivFirstPercentageBar = useTransform(
    scaledProgress,
    [33, 36],
    [60, 130]
  );

  const orangeBottomDivSecondPercentageBar = useTransform(
    scaledProgress,
    [33, 36],
    [60, 100]
  );

  const orangeBottomDivThirdPercentageBar = useTransform(
    scaledProgress,
    [33, 36],
    [60, 80]
  );

  const orangeBottomDivFourthPercentageBar = useTransform(
    scaledProgress,
    [33, 36],
    [60, 60]
  );

  /* Purple DIV */
  const purpleDivWidth = useTransform(scaledProgress, [16, 21], [0, 250]);

  const purpleDivOpacity = useTransform(scaledProgress, [16, 21], [0, 1]);

  const purpleDivContentOpacity = useTransform(
    scaledProgress,
    [20, 21],
    [0, 1]
  );

  const purpleBottomDivScale = useTransform(
    scaledProgress,
    [43, 46, 55, 58],
    [0.1, 1, 1, 0.1]
  );

  const purpleCircleOffset = useTransform(scaledProgress, [46, 54], [220, 0]);

  /* Yellow DIV */
  const yellowDivWidth = useTransform(scaledProgress, [22, 27], [0, 250]);

  const yellowDivOpacity = useTransform(scaledProgress, [22, 27], [0, 1]);

  const yellowDivContentOpacity = useTransform(
    scaledProgress,
    [26, 27],
    [0, 1]
  );

  return (
    <motion.div
      ref={greenSectionRef}
      style={{ y: greenSectionPosition }}
      className="relative w-full min-h-[1200vh] bg-[#05B151] mx-auto rounded-lg py-30 px-30"
    >
      <div className="sticky top-1/2 -translate-y-1/2 flex gap-4 h-auto w-full items-center justify-between text-center py-30 px-10">
        {/* Left column (Cards) */}
        <div className="w-1/2 flex flex-col gap-2">
          {/* Top group - Orange Card */}
          <div className="flex flex-col">
            {/* Orange Top Div */}
            <motion.div
              style={{ width: orangeDivWidth, opacity: orangeDivOpacity }}
              className="h-[60px] bg-[#FE6E38] flex items-center justify-between border border-black rounded-md px-5"
            >
              <div className="flex flex-col items-start justify-center">
                <motion.p
                  style={{ opacity: orangeDivContentOpacity }}
                  className="text-black font-dm font-[900] leading-[1] tracking-tighter"
                >
                  Streaming history
                </motion.p>
                <motion.p
                  style={{ opacity: orangeDivContentOpacity }}
                  className="text-[#B5522D] font-dm font-[600] leading-[1.2] tracking-tighter"
                >
                  Loves sci-fi
                </motion.p>
              </div>
              <motion.div
                style={{ opacity: orangeDivContentOpacity }}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
              >
                <PlayIcon className="text-[#B5522D]" />
              </motion.div>
            </motion.div>

            {/* Orange Bottom Div */}
            {showOrangeBottomDiv && (
              <motion.div
                style={{
                  scale: orangeBottomDivScale,
                  originX: 0.5,
                  originY: 0,
                }}
                className="w-[250px] h-[130px] border border-black rounded-xl bg-[#FFCDBA] flex flex-col items-start justify-around px-3 py-3"
              >
                {/* Each row inside */}
                {[
                  {
                    label: "Sci-Fi",
                    width: orangeBottomDivFirstPercentageBar,
                    percent: "98%",
                  },
                  {
                    label: "Thriller",
                    width: orangeBottomDivSecondPercentageBar,
                    percent: "73%",
                  },
                  {
                    label: "Comedy",
                    width: orangeBottomDivThirdPercentageBar,
                    percent: "34%",
                  },
                  {
                    label: "Drama",
                    width: orangeBottomDivFourthPercentageBar,
                    percent: "12%",
                  },
                ].map(({ label, width, percent }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-start gap-2 w-full"
                  >
                    <div className="w-[80px] text-left">
                      <p className="font-dm text-black font-[600] text-sm">
                        {label}
                      </p>
                    </div>
                    <motion.div
                      style={{ width }}
                      className="h-[20px] border border-black rounded-full bg-[#FE6E38] flex items-center justify-start px-4"
                    >
                      <p className="text-black text-sm font-dm font-[1000]">
                        {percent}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          <div className="flex flex-col">
            {/* Purple Top Div */}
            <motion.div
              style={{
                width: purpleDivWidth,
                opacity: purpleDivOpacity,
              }}
              className="h-[60px] bg-[#7A79FE] flex items-center justify-between border border-black rounded-md px-5"
            >
              <div className="flex flex-col items-start justify-center">
                <motion.p
                  style={{ opacity: purpleDivContentOpacity }}
                  className="text-black font-dm font-[900] leading-[1] tracking-tighter"
                >
                  Browsing habits
                </motion.p>
                <motion.p
                  style={{ opacity: purpleDivContentOpacity }}
                  className="text-[#5151A0] font-dm font-[600] leading-[1.2] tracking-tighter"
                >
                  Shopping
                </motion.p>
              </div>
              <motion.div
                style={{ opacity: purpleDivContentOpacity }}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
              >
                <ThumbsUpIcon className="text-[#7A79FE]" />
              </motion.div>
            </motion.div>

            {/* Purple Bottom Div */}
            {showPurpleBottomDiv && (
              <motion.div
                style={{
                  scale: purpleBottomDivScale,
                  originX: 0.5,
                  originY: 0,
                }}
                className="w-[250px] h-[130px] border border-black rounded-xl bg-[#E6EBFF] flex items-center justify-center relative"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-[120px] h-[120px] rotate-[-90deg]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#D3D3D3"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#7A79FE"
                    strokeWidth="8"
                    strokeDasharray="220"
                    strokeDashoffset={purpleCircleOffset}
                  />
                </svg>

                {/* Text inside circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-black font-dm font-[1000] text-[20px] leading-none">
                    4+
                  </p>
                  <p className="text-black font-dm font-[500] text-xs leading-none">
                    hours daily
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Yellow Div */}
          <motion.div
            style={{ width: yellowDivWidth, opacity: yellowDivOpacity }}
            className="h-[60px] bg-[#FEC313] flex items-center justify-between border border-black rounded-md px-5"
          >
            <div className="flex flex-col items-start justify-center">
              <motion.p
                style={{ opacity: yellowDivContentOpacity }}
                className="text-black font-dm font-[900] leading-[1] tracking-tighter"
              >
                Browsing habits
              </motion.p>
              <motion.p
                style={{ opacity: yellowDivContentOpacity }}
                className="text-[#B78F13] font-dm font-[600] leading-[1.2] tracking-tighter"
              >
                Shopping
              </motion.p>
            </div>
            <motion.div
              style={{ opacity: yellowDivContentOpacity }}
              className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
            >
              <ShoppingBasket className="text-[#FEC313]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start items-start gap-3 w-1/2">
          <p className="text-black font-dm font-[500]">Types of navigator</p>
          <h3 className="text-black font-dm font-[1000] text-left text-3xl tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut
            saepe cum, tempore tempora temporibus dolor id. Ipsa tempori.
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
