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
  greenSectionProgress: MotionValue<number>;
}

export const GreenSection = ({
  greenSectionRef,
  greenSectionProgress,
}: GreenSectionProps) => {
  const [showOrangeBottomDiv, setShowOrangeBottomDiv] = useState(false);

  useMotionValueEvent(greenSectionProgress, "change", (latest) => {
    if (latest >= 0.43) {
      setShowOrangeBottomDiv(true);
    } else {
      setShowOrangeBottomDiv(false);
    }
  });

  const greenSectionPosition = useTransform(
    greenSectionProgress,
    [0.05, 0.2],
    [-500, 0]
  );

  /* Orange DIV */
  const orangeDivWidth = useTransform(
    greenSectionProgress,
    [0.2, 0.25],
    [0, 250]
  );

  const orangeDivOpacity = useTransform(
    greenSectionProgress,
    [0.2, 0.25],
    [0, 1]
  );

  const orangeDivContentOpacity = useTransform(
    greenSectionProgress,
    [0.24, 0.25],
    [0, 1]
  );

  const orangeBottomDivScale = useTransform(
    greenSectionProgress,
    [0.43, 0.6],
    [0.1, 1]
  );

  /* Purple DIV */
  const purpleDivWidth = useTransform(
    greenSectionProgress,
    [0.25, 0.3],
    [0, 250]
  );

  const purpleDivOpacity = useTransform(
    greenSectionProgress,
    [0.25, 0.3],
    [0, 1]
  );

  const purpleDivContentOpacity = useTransform(
    greenSectionProgress,
    [0.29, 0.3],
    [0, 1]
  );

  /* Yellow DIV */
  const yellowDivWidth = useTransform(
    greenSectionProgress,
    [0.35, 0.4],
    [0, 250]
  );

  const yellowDivOpacity = useTransform(
    greenSectionProgress,
    [0.35, 0.4],
    [0, 1]
  );

  const yellowDivContentOpacity = useTransform(
    greenSectionProgress,
    [0.39, 0.4],
    [0, 1]
  );

  return (
    <motion.div
      ref={greenSectionRef}
      style={{ y: greenSectionPosition }}
      className="relative w-full min-h-[570vh] bg-[#05B151] mx-auto rounded-lg py-30 px-30"
    >
      <div className="sticky top-1/2 -translate-y-1/2 flex gap-4 h-auto w-full items-center justify-between text-center py-30 px-10 border border-black">
        <div className="border w-1/2 flex flex-col gap-2">
          <div className="flex flex-col">
            {/* Orange DIV */}
            <motion.div
              style={{ width: orangeDivWidth, opacity: orangeDivOpacity }}
              className="w-[250px] h-[60px] bg-[#FE6E38] flex items-center justify-between border border-black rounded-md px-5"
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
                  Loves sci-FI
                </motion.p>
              </div>
              <motion.div
                style={{ opacity: orangeDivContentOpacity }}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
              >
                <PlayIcon className="text-[#B5522D]" />
              </motion.div>
            </motion.div>
            {/* Orange bottom div */}
            {showOrangeBottomDiv && (
              <motion.div
                style={{
                  scale: orangeBottomDivScale,
                  originX: 0.5,
                  originY: 0,
                }}
                className="w-[250px] h-[130px] border border-black rounded-xl bg-[#FFCDBA] flex flex-col items-start justify-around px-3 py-3"
              >
                {/* 1st Row */}
                <div className="flex items-center justify-start gap-2 w-full">
                  <div className="w-[80px] text-left">
                    <p className="font-dm text-black font-[600] text-sm">
                      Sci-Fi
                    </p>
                  </div>
                  <div className="h-[20px] w-[130px] border border-black rounded-full bg-[#FE6E38] flex items-center justify-start px-4">
                    <p className="text-black text-sm font-dm font-[1000]">
                      98%
                    </p>
                  </div>
                </div>

                {/* 2nd Row */}
                <div className="flex items-center justify-start gap-2 w-full">
                  <div className="w-[80px] text-left">
                    <p className="font-dm text-black font-[600] text-sm">
                      Thriller
                    </p>
                  </div>
                  <div className="h-[20px] w-[100px] border border-black rounded-full bg-[#FE6E38] flex items-center justify-start px-4">
                    <p className="text-black text-sm font-dm font-[1000]">
                      73%
                    </p>
                  </div>
                </div>

                {/* 3rd Row */}
                <div className="flex items-center justify-start gap-2 w-full">
                  <div className="w-[80px] text-left">
                    <p className="font-dm text-black font-[600] text-sm">
                      Comedy
                    </p>
                  </div>
                  <div className="h-[20px] w-[75px] border border-black rounded-full bg-[#FE6E38] flex items-center justify-start px-4">
                    <p className="text-black text-sm font-dm font-[1000]">
                      34%
                    </p>
                  </div>
                </div>

                {/* 4th Row */}
                <div className="flex items-center justify-start gap-2 w-full">
                  <div className="w-[80px] text-left">
                    <p className="font-dm text-black font-[600] text-sm">
                      Drama
                    </p>
                  </div>
                  <div className="h-[20px] w-[60px] border border-black rounded-full bg-[#FE6E38] flex items-center justify-start px-4">
                    <p className="text-black text-sm font-dm font-[1000]">
                      12%
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Purple DIV */}
          <motion.div
            style={{
              width: purpleDivWidth,
              opacity: purpleDivOpacity,
            }}
            className="w-[250px] h-[60px] bg-[#7A79FE] flex items-center justify-between border border-black rounded-md px-5"
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

          {/* Yellow DIV */}
          <motion.div
            style={{ width: yellowDivWidth, opacity: yellowDivOpacity }}
            className="w-[250px] h-[60px] bg-[#FEC313] flex items-center justify-between border border-black rounded-md px-5"
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
        <div className="flex flex-col justify-start items-start gap-3 w-1/2">
          <p className="text-black font-dm font-[500]">Types of navigator</p>
          <h3 className="text-black font-dm font-[1000] text-left text-3xl tracking-tighter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aut
            saepe cum, tempore tempora temporibus dolor id. Ipsa tempori
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
