"use client";

import {
  BadgeIcon,
  FileIcon,
  FilmIcon,
  GhostIcon,
  MoveIcon,
} from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
  const textRef = useRef(null);
  const iconContainerRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });

  const [currentWordIndex1, setCurrentWordIndex1] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);

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

  return (
    <>
      {/* Background color changing */}
      <motion.div style={{ backgroundColor }}>
        {/* Top section (Title and Button) */}
        <div
          ref={textRef}
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
            ref={iconContainerRef}
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
      <motion.div className="w-full min-h-[1800vh] bg-[#141414] flex items-center justify-center text-white relative z-40">
        <div className="flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-50 gap-7">
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
    </>
  );
};
