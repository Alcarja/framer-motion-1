"use client";

import {
  BadgeIcon,
  FileIcon,
  FilmIcon,
  GhostIcon,
  MoveIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Arrow1 } from "@/components/svgs/Arrow1";
import { Arrow2 } from "@/components/svgs/Arrow2";
import { Arrow3 } from "@/components/svgs/Arrow3";

export const HomeView = () => {
  const textRef = useRef(null);
  const iconContainerRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });

  /* Title */
  /* From 400px to 1200px */
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scale = useTransform(scrollY, [400, 1200], [1, 0.4]);

  const backgroundColor = useTransform(scrollY, (y) =>
    y >= 1200 ? "#FEF9F0" : "#000000"
  );

  /* Track Y in the whole page to see where we are */

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      console.log("Current scrollY:", latest);
    });

    return () => unsubscribe(); // Cleanup
  }, [scrollY]);

  /* Icons */
  /* From 1250 to 1600px */

  const textOpacity = useTransform(scrollY, [1250, 1600], [0, 1]);
  const textY = useTransform(scrollY, [1250, 1600], [50, 0]);

  const icon1X = useTransform(scrollY, [1250, 1600], [0, -300]); // move left
  const icon1Y = useTransform(scrollY, [1250, 1600], [0, -300]); // move up

  const icon2X = useTransform(scrollY, [1250, 1600], [0, -10]); // move left
  const icon2Y = useTransform(scrollY, [1250, 1600], [0, 550]); // move down

  const icon3X = useTransform(scrollY, [1250, 1600], [0, 90]); // move left
  const icon3Y = useTransform(scrollY, [1250, 1600], [0, -550]); // move down

  const icon4X = useTransform(scrollY, [1250, 1600], [0, 90]); // move left
  const icon4Y = useTransform(scrollY, [1250, 1600], [0, 630]); // move down

  const icon5X = useTransform(scrollY, [1250, 1600], [0, 590]); // move left
  const icon5Y = useTransform(scrollY, [1250, 1600], [0, 10]); // move down

  /* Arrows */
  /* From 2300 to 6000px */

  const arrow1X = useTransform(
    scrollY,
    [2000, 2100, 8000, 11900],
    ["-200vw", "-200vw", "0vw", "130vw"] //The first two values have to match the width of the arrow
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

  /* Section 3 text */

  //By word
  const OpacityForWord = (index: number, baseScroll: number) => {
    return useTransform(
      scrollY,
      [
        baseScroll + index * 200, // invisible ➔ each word needs bigger spacing
        baseScroll + index * 200 + 150, // faded
        baseScroll + index * 200 + 300, // fully solid
      ],
      [0, 0.4, 1]
    );
  };

  const MaskForWord = (index: number, baseScroll: number) => {
    return useTransform(
      scrollY,
      [baseScroll + index * 200, baseScroll + index * 200 + 300],
      [
        "linear-gradient(to right, transparent 0%, transparent 100%)",
        "linear-gradient(to right, white 0%, white 100%)",
      ]
    );
  };

  return (
    <>
      <motion.div style={{ backgroundColor }}>
        {/* Fullscreen Intro */}
        <div
          ref={textRef}
          className="w-full h-[75vh] flex flex-col overflow-hidden"
        >
          <motion.div
            style={{ y, opacity }}
            className="flex-1 flex flex-col items-center justify-center px-4 gap-y-6"
          >
            <div className="w-[700px] flex flex-col items-center justify-center text-center -translate-y-20">
              <h1 className="text-[120px] leading-[0.8]">
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

        {/* Sticky icons scaling as a group */}
        <div className="relative h-[700vh] w-full">
          <div
            ref={iconContainerRef}
            className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-0"
          >
            <motion.div
              style={{ scale }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-row items-center justify-center gap-1"
            >
              {/* Icon 1 */}
              <motion.div
                className="rounded-full bg-[#FFC313] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon1X, y: icon1Y }}
              >
                <GhostIcon className="w-50 h-50 text-black" />
              </motion.div>

              {/* Icon 2 */}
              <motion.div
                className="rounded-full bg-[#7A78FF] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon2X, y: icon2Y }}
              >
                <MoveIcon className="w-50 h-50 text-black" />
              </motion.div>

              {/* Icon 3 */}
              <motion.div
                className="rounded-full bg-[#04A552] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon3X, y: icon3Y }}
              >
                <FilmIcon className="w-50 h-50 text-black" />
              </motion.div>

              {/* Icon 4 */}
              <motion.div
                className="rounded-full bg-[#FD6D38] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon4X, y: icon4Y }}
              >
                <BadgeIcon className="w-50 h-50 text-black" />
              </motion.div>

              {/* Icon 5 */}
              <motion.div
                className="rounded-full bg-[#80fd38] w-60 h-60 flex items-center justify-center border border-black"
                style={{ x: icon5X, y: icon5Y }}
              >
                <FileIcon className="w-50 h-50 text-black" />
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-md z-10"
            >
              <p className="text-lg mt-2 text-gray-700">
                Youre not just the product. Youre the owner.
              </p>
              <h2 className="text-[90px] leading-[1] font-bold text-black">
                Empower the Future of Data
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Arrows */}

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

      <div className="w-full h-[300vh] bg-[#141414]" />

      {/* Black Background Section */}
      <motion.div className="w-full min-h-[1300vh] bg-[#141414] flex items-center justify-center text-white relative z-40">
        <div className="flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-50 gap-7">
          {/* Paragraph 1 */}
          <div className="inline-block text-center">
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis cumque veritatis molestiae tenetur modi alias fuga vitae dignissimos quaerat perferendis distinctio eius voluptate enim quisquam"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  style={{
                    opacity: OpacityForWord(index, 10959),
                    WebkitMaskImage: MaskForWord(index, 20700),
                    maskImage: MaskForWord(index, 20700),
                    WebkitMaskSize: "200% 100%",
                    maskSize: "200% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                  className={`text-4xl font-bold leading-[1] mr-2 ${
                    index === 0 // 👈 first word special styling
                      ? "bg-[#7A78FF] text-black px-1.5 py-1.5 rounded-md"
                      : "text-white"
                  }`}
                >
                  <p>{word}</p>
                </motion.span>
              ))}
          </div>

          {/* Paragraph 2 */}
          <div className="inline-block text-center">
            {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aspernatur voluptatibus, nisi debitis deserunt et veritatis consectetur minima aliquam porro itaque repellat dicta, ipsa est omnis quod, "
              .split(" ") // <--- split by SPACE, now you get words!
              .map((word, index) => (
                <motion.span
                  key={index}
                  style={{
                    opacity: OpacityForWord(index, 16803), // ✨ NEW function
                    WebkitMaskImage: MaskForWord(index, 20700), // ✨ NEW function
                    maskImage: MaskForWord(index, 20700),
                    WebkitMaskSize: "200% 100%",
                    maskSize: "200% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                  className="text-4xl font-bold leading-[1] mr-2 " // 👈 add margin between words!
                >
                  {word}
                </motion.span>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
