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
              <h1 className="text-[120px] font-bold leading-[0.8]">
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
        <div className="relative h-[1200vh] w-full">
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
          top: "0vh",
        }}
        className="fixed left-0 origin-left w-[200vw] h-[33.33vh] z-50 pointer-events-none"
      >
        <svg
          viewBox="0 0 985 151"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M903.164 1H415.157V150H903.164C903.164 150 983.5 100.025 983.5 75.5C983.5 50.9752 903.164 1 903.164 1Z"
            fill="#7A78FF"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M489.007 1H1V150H489.007C489.007 150 569.343 100.025 569.343 75.5C569.343 50.9752 489.007 1 489.007 1Z"
            fill="#FFC313"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        style={{
          x: arrow2X,
          scaleX: arrow2ScaleX,
          opacity: arrow2Opacity,
          top: "33.33vh",
        }}
        className="fixed left-0 origin-left w-[180vw] h-[33.33vh] z-50 pointer-events-none"
      >
        <svg
          viewBox="0 0 1185 151"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1069.08 1H371V150H1069.08C1069.08 150 1184 100.025 1184 75.5C1184 50.9752 1069.08 1 1069.08 1Z"
            fill="#ADFF26"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M369.36 1H1V150H369.36C369.36 150 430 100.025 430 75.5C430 50.9752 369.36 1 369.36 1Z"
            fill="#FD6D38"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
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
        <svg
          viewBox="0 0 1732 151"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1616.08 1H918V150H1616.08C1616.08 150 1731 100.025 1731 75.5C1731 50.9752 1616.08 1 1616.08 1Z"
            fill="#FFC313"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M1234.92 1H548V150H1234.92C1234.92 150 1348 100.025 1348 75.5C1348 50.9752 1234.92 1 1234.92 1Z"
            fill="#B9DDFD"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M687.918 1H1V150H687.918C687.918 150 801 100.025 801 75.5C801 50.9752 687.918 1 687.918 1Z"
            fill="#FD6D38"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </>
  );
};
