"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Arrow1 } from "@/components/svgs/Arrow1";
import { Arrow2 } from "@/components/svgs/Arrow2";
import { Arrow3 } from "@/components/svgs/Arrow3";

interface ArrowsSectionProps {
  scrollY: MotionValue<number>;
}

export const ArrowsSection = ({ scrollY }: ArrowsSectionProps) => {
  //The width of the arrow has to match with the "-200vw" value for it to work properly
  //This one doesn't need the ref because we are using absolute "y" values. We use absolute values because they appear between two sections, so we can't use the ref of a specific section to manipulate them
  const arrow1X = useTransform(
    scrollY,
    [2000, 2100, 8000, 11900],
    ["-200vw", "-200vw", "0vw", "130vw"]
  );
  const arrow2X = useTransform(
    scrollY,
    [2900, 3000, 8900, 11900],
    ["-180vw", "-180vw", "0vw", "160vw"]
  );
  const arrow3X = useTransform(
    scrollY,
    [2700, 2800, 8700, 11900],
    ["-160vw", "-160vw", "0vw", "160vw"]
  );

  const arrow1Opacity = useTransform(
    scrollY,
    [2000, 2100, 10900, 12000],
    [0, 1, 1, 0]
  );
  const arrow2Opacity = useTransform(
    scrollY,
    [2900, 3000, 10900, 12000],
    [0, 1, 1, 0]
  );
  const arrow3Opacity = useTransform(
    scrollY,
    [2700, 2800, 10900, 12000],
    [0, 1, 1, 0]
  );

  return (
    <>
      <motion.div
        style={{ x: arrow1X, opacity: arrow1Opacity }}
        className="fixed left-0 origin-left w-[200vw] h-[33.33vh] z-50 pointer-events-none top-[-0.1vh]"
      >
        <Arrow1 />
      </motion.div>
      <motion.div
        style={{ x: arrow2X, opacity: arrow2Opacity }}
        className="fixed left-0 origin-left w-[180vw] h-[34vh] z-50 pointer-events-none top-[33vh]"
      >
        <Arrow2 />
      </motion.div>
      <motion.div
        style={{ x: arrow3X, opacity: arrow3Opacity }}
        className="fixed left-0 origin-left w-[160vw] h-[33.33vh] z-50 pointer-events-none top-[66.66vh]"
      >
        <Arrow3 />
      </motion.div>
    </>
  );
};
