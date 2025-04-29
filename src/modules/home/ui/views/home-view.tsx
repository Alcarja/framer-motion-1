"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TitleSection } from "../sections/titleSection";
import { IconsSection } from "../sections/iconsSection";
import { ArrowsSection } from "../sections/arrowsSection";
import { PurpleSection } from "../sections/purpleSection";
import { AppearingWordsSection } from "../sections/appearingWordsSection";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { GreenSection } from "../sections/greenSection";

export const HomeView = () => {
  const titleScreenRef = useRef<HTMLDivElement>(null);
  const iconsScreenRef = useRef<HTMLDivElement>(null);
  const appearingWordsRef = useRef<HTMLDivElement>(null);
  const purpleSectionRef = useRef<HTMLDivElement>(null);
  const greenSectionRef = useRef<HTMLDivElement>(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: titleScreenRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: purpleSectionProgress } = useScroll({
    target: purpleSectionRef,
    offset: ["start end", "center start"],
  });

  const backgroundColor = useTransform(scrollY, (y) =>
    y >= 1200 ? "#FEF9F0" : "#000000"
  );

  //GET THE CURRENT Y VALUE
  useMotionValueEvent(scrollY, "change", (value) => {
    console.log("Current scrollY value:", value);
  });

  const paragraph1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis cumque veritatis molestiae tenetur modi alias fuga vitae dignissimos quaerat perferendis distinctio eius voluptate enim quisquam".split(
      " "
    );
  const paragraph2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis cumque veritatis molestiae tenetur modi alias fuga vitae dignissimos quaerat perferendis distinctio eius voluptate enim quisquam".split(
      " "
    );

  return (
    <>
      <motion.div style={{ backgroundColor: backgroundColor }}>
        <TitleSection
          scrollYProgress={scrollYProgress}
          titleScreenRef={titleScreenRef}
        />
        <IconsSection scrollY={scrollY} iconsScreenRef={iconsScreenRef} />
      </motion.div>

      <ArrowsSection scrollY={scrollY} />

      <AppearingWordsSection
        scrollY={scrollY}
        appearingWordsRef={appearingWordsRef}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
      />

      <PurpleSection
        scrollY={scrollY}
        purpleSectionProgress={purpleSectionProgress}
        purpleSectionRef={purpleSectionRef}
      />

      <GreenSection scrollY={scrollY} greenSectionRef={greenSectionRef} />
    </>
  );
};
