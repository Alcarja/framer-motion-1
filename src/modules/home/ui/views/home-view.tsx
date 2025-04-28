"use client";

import {
  BadgeIcon,
  FileIcon,
  FilmIcon,
  GhostIcon,
  LockIcon,
  MoveIcon,
  UnlockIcon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Arrow1 } from "@/components/svgs/Arrow1";
import { Arrow2 } from "@/components/svgs/Arrow2";
import { Arrow3 } from "@/components/svgs/Arrow3";

const OpacityForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) => {
  return useTransform(
    scrollY,
    [
      baseScroll + index * 200,
      baseScroll + index * 200 + 150,
      baseScroll + index * 200 + 300,
    ],
    [0, 0.4, 1]
  );
};

const MaskForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) => {
  return useTransform(
    scrollY,
    [baseScroll + index * 200, baseScroll + index * 200 + 300],
    [
      "linear-gradient(to right, transparent 0%, transparent 100%)",
      "linear-gradient(to right, white 0%, white 100%)",
    ]
  );
};

const CoverColorForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) => {
  return useTransform(
    scrollY,
    [
      baseScroll + index * 200 - 500,
      baseScroll + index * 200 - 300,
      baseScroll + index * 200 - 150,
      baseScroll + index * 200,
    ],
    ["#4a4a4a", "#464646", "#141414", "#00000000"]
  );
};

export const HomeView = () => {
  const titleScreenRef = useRef(null); //First section
  const iconsScreenRef = useRef(null); //Second section
  const appearingWordsRef = useRef(null); //Third section
  const fourthScreenRef = useRef(null); //Fourth section

  const { scrollY, scrollYProgress } = useScroll({
    target: titleScreenRef,
    offset: ["start start", "end start"],
  });

  const [currentWordIndex1, setCurrentWordIndex1] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);

  //GET THE CURRENT Y VALUE
  useMotionValueEvent(scrollY, "change", (value) => {
    console.log("Current scrollY value:", value); // ✅ value is a number
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const index1 = Math.floor((latest - 10959) / 200);
      const index2 = Math.floor((latest - 16959) / 200);
      setCurrentWordIndex1(index1);
      setCurrentWordIndex2(index2);
    });

    return () => unsubscribe();
  }, [scrollY]);

  // --- Title Section ---
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollY, [400, 1200], [1, 0.4]);
  const backgroundColor = useTransform(scrollY, (y) =>
    y >= 1200 ? "#FEF9F0" : "#000000"
  );

  // --- Icons Section ---
  const textOpacity = useTransform(scrollY, [1250, 1600], [0, 1]);
  const textY = useTransform(scrollY, [1250, 1600], [50, 0]);
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

  // --- Arrows Section ---
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
  const arrow1ScaleX = useTransform(scrollY, [0, 12000], [1, 1]);
  const arrow2ScaleX = useTransform(scrollY, [0, 12000], [1, 1]);
  const arrow3ScaleX = useTransform(scrollY, [0, 12000], [1, 1]);
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

  // --- Words Section ---
  const paragraph1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis cumque veritatis molestiae tenetur modi alias fuga vitae dignissimos quaerat perferendis distinctio eius voluptate enim quisquam".split(
      " "
    );
  const paragraph2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis cumque veritatis molestiae tenetur modi alias fuga vitae dignissimos quaerat perferendis distinctio eius voluptate enim quisquam".split(
      " "
    );

  // Prepare transforms for all words
  const wordOpacitie1 = paragraph1.map((_, index) =>
    OpacityForWord(scrollY, index, 10959)
  );
  const wordMask1 = paragraph1.map((_, index) =>
    MaskForWord(scrollY, index, 20700)
  );
  const wordCoverColor1 = paragraph1.map((_, index) =>
    CoverColorForWord(scrollY, index, 10959)
  );

  const wordOpacitie2 = paragraph2.map((_, index) =>
    OpacityForWord(scrollY, index, 16959)
  );
  const wordMask2 = paragraph2.map((_, index) =>
    MaskForWord(scrollY, index, 16959)
  );
  const wordCoverColor2 = paragraph2.map((_, index) =>
    CoverColorForWord(scrollY, index, 16959)
  );

  // --- RED SECTION ---

  const { scrollYProgress: redSectionProgress } = useScroll({
    target: fourthScreenRef,
    offset: ["start end", "center start"],
    // "start end" -> 0 when bottom hits viewport
    // "center start" -> 1 when middle hits top
  });

  // Width transform from 80% -> 100%
  const redSectionWidth = useTransform(
    redSectionProgress,
    [0, 0.2], // 👈 Grow to full width when just 5% into scroll
    ["90%", "100%"]
  );

  //Position
  const redSectionTextY = useTransform(
    redSectionProgress,
    [0, 0.2], // In the first 10% of the scroll
    [500, 0] // From 100px below → to 0px (original position)
  );

  //Opacity
  const redSectionTextOpacity = useTransform(scrollY, [23426, 23719], [0, 1]);

  // --- Yellow Box ---

  //Position

  const yellowBoxPosition = useTransform(
    redSectionProgress,
    [0.21, 0.22], // over first 20% of the section scroll
    [50, 0] // start 300px to the left, then slide into position
  );

  const yellowBoxOpacity = useTransform(
    redSectionProgress,
    [0.19, 0.2], // over first 20% of the section scroll
    [0, 1]
  );

  //PROGRESS BAR
  // --- Percentage number ---
  const animatedPercent = useTransform(
    redSectionProgress,
    [0.21, 1], // progress scroll from start (0) to end (1)
    [1, 100] // map it from 1% to 100%
  );

  const yellowDivColor = useTransform(
    redSectionProgress,
    [0.21, 1], // progress scroll from start (0) to end (1)
    ["#FFC313", "#FF6D38"] // map it from 1% to 100%
  );

  const [percent, setPercent] = useState(1);

  useMotionValueEvent(animatedPercent, "change", (latest) => {
    setPercent(Math.round(latest));
  });

  const progressBarWidth = useTransform(
    redSectionProgress,
    [0.21, 1],
    ["0%", "100%"]
  );

  //RED SECTION ICONS
  const redSectionIcon1XPosition = useTransform(
    redSectionProgress,
    [0.27, 0.3], // progress scroll from start (0) to end (1)
    [50, 0] // map it from 1% to 100%
  );

  const redSectionIcon1Opacity = useTransform(
    redSectionProgress,
    [0.27, 0.28], // progress scroll from start (0) to end (1)
    [0, 1] // map it from 1% to 100%
  );

  const redSectionIcon1BgColor = useTransform(
    redSectionProgress,
    [0.8, 0.85], // progress scroll from start (0) to end (1)
    ["#FD6D38", "#40b650"] // map it from 1% to 100%
  );

  const redSectionIcon2XPosition = useTransform(
    redSectionProgress,
    [0.3, 0.33], // progress scroll from start (0) to end (1)
    [50, 0] // map it from 1% to 100%
  );

  const redSectionIcon2Opacity = useTransform(
    redSectionProgress,
    [0.3, 0.31], // progress scroll from start (0) to end (1)
    [0, 1] // map it from 1% to 100%
  );

  const redSectionIcon3XPosition = useTransform(
    redSectionProgress,
    [0.35, 0.38, 0.9, 0.95], // progress scroll from start (0) to end (1)
    [50, 0, 0, 50] // map it from 1% to 100%
  );

  const redSectionIcon3Opacity = useTransform(
    redSectionProgress,
    [0.33, 0.35, 0.9, 0.95], // progress scroll from start (0) to end (1)
    [0, 1, 1, 0] // map it from 1% to 100%
  );

  const redSectionIcon4XPosition = useTransform(
    redSectionProgress,
    [0.41, 0.45, 0.9, 0.95], // progress scroll from start (0) to end (1)
    [50, 0, 0, 50] // map it from 1% to 100%
  );

  const redSectionIcon4Opacity = useTransform(
    redSectionProgress,
    [0.38, 0.41, 0.9, 0.95], // progress scroll from start (0) to end (1)
    [0, 1, 1, 0] // map it from 1% to 100%
  );

  return (
    <>
      {/* Background color changing */}
      <motion.div style={{ backgroundColor }}>
        {/* Top section (Title and Button) */}
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

        {/* Icons moving */}
        <div className="relative h-[600vh] w-full">
          <div
            ref={iconsScreenRef}
            className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-0"
          >
            <motion.div
              style={{ scale }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-row items-center justify-center gap-1"
            >
              <motion.div
                className="rounded-full bg-[#FFC313] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon1X, y: icon1Y }}
              >
                <GhostIcon className="w-50 h-50 text-black" />
              </motion.div>
              <motion.div
                className="rounded-full bg-[#7A78FF] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon2X, y: icon2Y }}
              >
                <MoveIcon className="w-50 h-50 text-black" />
              </motion.div>
              <motion.div
                className="rounded-full bg-[#04A552] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon3X, y: icon3Y }}
              >
                <FilmIcon className="w-50 h-50 text-black" />
              </motion.div>
              <motion.div
                className="rounded-full bg-[#FD6D38] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon4X, y: icon4Y }}
              >
                <BadgeIcon className="w-50 h-50 text-black" />
              </motion.div>
              <motion.div
                className="rounded-full bg-[#80fd38] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon5X, y: icon5Y }}
              >
                <FileIcon className="w-50 h-50 text-black" />
              </motion.div>
            </motion.div>

            {/* Sticky text above icons */}
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
      </motion.div>

      {/* Animated Arrows */}
      <motion.div
        style={{
          x: arrow1X,
          scaleX: arrow1ScaleX,
          opacity: arrow1Opacity,
          top: "-0.1vh",
        }}
        className="fixed left-0 origin-left w-[200vw] h-[33.33vh] z-50 pointer-events-none"
      >
        <Arrow1 />
      </motion.div>
      <motion.div
        style={{
          x: arrow2X,
          scaleX: arrow2ScaleX,
          opacity: arrow2Opacity,
          top: "33vh",
        }}
        className="fixed left-0 origin-left w-[180vw] h-[34vh] z-50 pointer-events-none"
      >
        <Arrow2 />
      </motion.div>
      <motion.div
        style={{
          x: arrow3X,
          scaleX: arrow3ScaleX,
          opacity: arrow3Opacity,
          top: "66.66vh",
        }}
        className="fixed left-0 origin-left w-[160vw] h-[33.33vh] z-50 pointer-events-none"
      >
        <Arrow3 />
      </motion.div>

      {/* Big Section with Words Animation */}
      <motion.div
        ref={appearingWordsRef}
        className="relative min-h-[1100vh] w-full bg-[#141414] text-white z-40"
      >
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center text-center gap-7 px-8 max-w-5xl mx-auto w-full">
          <div className="inline-block text-left">
            {/* Paragraph 1 */}
            <div className="text-left">
              {paragraph1.map((word, index) => (
                <div key={`p1-${index}`} className="relative inline-block">
                  {currentWordIndex1 > 0 &&
                    index > currentWordIndex1 &&
                    index <= currentWordIndex1 + 3 && (
                      <motion.div
                        style={{
                          backgroundColor: wordCoverColor1[index],
                          scale: 1,
                        }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                      />
                    )}
                  <motion.span
                    style={{
                      opacity: wordOpacitie1[index],
                      WebkitMaskImage: wordMask1[index],
                      maskImage: wordMask1[index],
                      WebkitMaskSize: "200% 100%",
                      maskSize: "200% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                    className={`text-4xl mr-2 leading-[1] font-dm font-[1000] tracking-tighter ${
                      index === 0
                        ? "bg-[#7A78FF] text-black px-1.5 py-1.5 rounded-md"
                        : "text-[#FCF9F0]"
                    }`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Paragraph 2 */}
            <div className="text-left mt-16">
              {paragraph2.map((word, index) => (
                <div key={`p2-${index}`} className="relative inline-block">
                  {currentWordIndex2 > 0 &&
                    index > currentWordIndex2 &&
                    index <= currentWordIndex2 + 3 && (
                      <motion.div
                        style={{
                          backgroundColor: wordCoverColor2[index],
                          scale: 1,
                        }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                      />
                    )}
                  <motion.span
                    style={{
                      opacity: wordOpacitie2[index],
                      WebkitMaskImage: wordMask2[index],
                      maskImage: wordMask2[index],
                      WebkitMaskSize: "200% 100%",
                      maskSize: "200% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                    className={`text-4xl mr-2 leading-[1] font-dm font-[1000] tracking-tighter ${
                      index === 12
                        ? "bg-[#FD6D38] text-black px-1.5 py-1.5 rounded-md"
                        : "text-[#FCF9F0]"
                    }`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={fourthScreenRef}
        style={{ width: redSectionWidth }}
        className="w-full min-h-[600vh] bg-[#8584FF] mx-auto rounded-lg"
      >
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col h-auto w-full items-center justify-center py-30 px-100 text-center">
          <motion.p
            style={{ y: redSectionTextY, opacity: redSectionTextOpacity }}
            className="text-[130px] text-[#141414] leading-[0.8] font-dm font-[1000] tracking-tighter mb-[100px]"
          >
            Check your progress
          </motion.p>

          {/* Yellow div */}
          <motion.div
            style={{
              x: yellowBoxPosition,
              opacity: yellowBoxOpacity,
              backgroundColor: yellowDivColor,
            }}
            className="w-[350px] h-auto border border-black rounded-md flex flex-col overflow-hidden px-8 py-4 mb-4"
          >
            {/* Top part */}
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
                {redSectionProgress.get() < 0.85
                  ? "Accessing data..."
                  : "Locked in"}
              </div>
            </div>

            <div className="flex-1 w-full flex items-center justify-center">
              <div className="relative w-full h-[15px] border border-black rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  style={{
                    width: progressBarWidth,
                  }}
                  className={"h-full rounded-l-full bg-[#7A78FF]"}
                />
              </div>
            </div>
          </motion.div>
          <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
            <motion.div
              style={{
                opacity: redSectionIcon1Opacity,
                x: redSectionIcon1XPosition,
                backgroundColor: redSectionIcon1BgColor,
              }}
              className="h-[50px] w-[50px] border border-black rounded-sm flex items-center justify-center"
            >
              {redSectionProgress.get() > 0.7 ? (
                <UnlockIcon className="h-[30px] w-[30px] text-black" />
              ) : (
                <LockIcon className="h-[30px] w-[30px] text-black" />
              )}
            </motion.div>
            <motion.div
              style={{
                opacity: redSectionIcon2Opacity,
                x: redSectionIcon2XPosition,
              }}
              className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-black flex items-center justify-center"
            >
              <p className="text-white font-dm font-[800] text-xl tracking-tighter">
                Satoshi Nakamoto
              </p>
            </motion.div>
          </div>
          <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
            {redSectionProgress.get() < 0.95 && (
              <motion.div
                style={{
                  opacity: redSectionIcon3Opacity,
                  x: redSectionIcon3XPosition,
                }}
                className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-transparent flex items-center justify-center"
              >
                <motion.p
                  style={{ y: redSectionTextY }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-white font-dm font-[800] text-xl tracking-tighter"
                >
                  {redSectionProgress.get() > 0.55
                    ? "***************************"
                    : "satoshinakamoto@mail.com"}
                </motion.p>
              </motion.div>
            )}
          </div>
          <div className="w-[350px] h-auto flex items-start justify-start gap-3 mb-2">
            {redSectionProgress.get() < 0.95 && (
              <motion.div
                style={{
                  opacity: redSectionIcon4Opacity,
                  x: redSectionIcon4XPosition,
                }}
                className="h-[50px] w-auto px-5 py-2 border border-black rounded-full bg-transparent flex items-center justify-center"
              >
                <motion.p
                  style={{ y: redSectionTextY }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-white font-dm font-[800] text-xl tracking-tighter"
                >
                  {redSectionProgress.get() > 0.65
                    ? "*************"
                    : "Password123*?¿"}
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
