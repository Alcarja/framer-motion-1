"use client";

import {
  BadgeIcon,
  FileIcon,
  FilmIcon,
  GhostIcon,
  MoveIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HomeView = () => {
  const textRef = useRef(null);
  const iconContainerRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scale = useTransform(scrollY, [400, 1200], [1, 0.4]);

  const backgroundColor = useTransform(scrollY, (y) =>
    y >= 1200 ? "#FEF9F0" : "#000000"
  );

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

  return (
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
      <div className="relative h-[300vh] w-full">
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
  );
};
