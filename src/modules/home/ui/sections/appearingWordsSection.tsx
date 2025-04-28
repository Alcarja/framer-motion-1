"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface AppearingWordsSectionProps {
  scrollY: MotionValue<number>;
  appearingWordsRef: RefObject<HTMLDivElement | null>;
  paragraph1: string[];
  paragraph2: string[];
}

const OpacityForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) =>
  useTransform(
    scrollY,
    [
      baseScroll + index * 200,
      baseScroll + index * 200 + 150,
      baseScroll + index * 200 + 300,
    ],
    [0, 0.4, 1]
  );

const MaskForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) =>
  useTransform(
    scrollY,
    [baseScroll + index * 200, baseScroll + index * 200 + 300],
    [
      "linear-gradient(to right, transparent 0%, transparent 100%)",
      "linear-gradient(to right, white 0%, white 100%)",
    ]
  );

const CoverColorForWord = (
  scrollY: MotionValue<number>,
  index: number,
  baseScroll: number
) =>
  useTransform(
    scrollY,
    [
      baseScroll + index * 200 - 500,
      baseScroll + index * 200 - 300,
      baseScroll + index * 200 - 150,
      baseScroll + index * 200,
    ],
    ["#4a4a4a", "#464646", "#141414", "#00000000"]
  );

export const AppearingWordsSection = ({
  scrollY,
  appearingWordsRef,
  paragraph1,
  paragraph2,
}: AppearingWordsSectionProps) => {
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

  const wordOpacities1 = paragraph1.map((_, index) =>
    OpacityForWord(scrollY, index, 10959)
  );
  const wordMask1 = paragraph1.map((_, index) =>
    MaskForWord(scrollY, index, 20700)
  );
  const wordCoverColor1 = paragraph1.map((_, index) =>
    CoverColorForWord(scrollY, index, 10959)
  );

  const wordOpacities2 = paragraph2.map((_, index) =>
    OpacityForWord(scrollY, index, 16959)
  );
  const wordMask2 = paragraph2.map((_, index) =>
    MaskForWord(scrollY, index, 16959)
  );
  const wordCoverColor2 = paragraph2.map((_, index) =>
    CoverColorForWord(scrollY, index, 16959)
  );

  return (
    <motion.div
      ref={appearingWordsRef}
      className="relative min-h-[1400vh] w-full bg-[#141414] text-white z-40"
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
                    opacity: wordOpacities1[index],
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
                    opacity: wordOpacities2[index],
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
  );
};
