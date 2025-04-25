/* "use client";

import {
  GhostIcon,
  FlameIcon,
  RocketIcon,
  StarIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const icons = [
  {
    icon: <GhostIcon className="w-60 h-60 text-black" />,
    bg: "bg-red-500",
    rounded: "rounded-full",
  },
  {
    icon: <FlameIcon className="w-60 h-60 text-black" />,
    bg: "bg-orange-400",
    rounded: "rounded-[60px]",
  },
  {
    icon: <RocketIcon className="w-60 h-60 text-black" />,
    bg: "bg-yellow-300",
    rounded: "rounded-r-[100px]",
  },
  {
    icon: <StarIcon className="w-60 h-60 text-black" />,
    bg: "bg-green-400",
    rounded: "rounded-[60px]",
  },
  {
    icon: <SunIcon className="w-60 h-60 text-black" />,
    bg: "bg-blue-500",
    rounded: "rounded-full",
  },
];

export const HomeView = () => {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const isInView = useInView(iconRef, {
    margin: "-50% 0px -50% 0px", // triggers when it's centered vertically
    once: false, // keeps updating
  });

  return (
    <>
      <div
        ref={textRef}
        className="w-full h-[88vh] flex flex-col overflow-hidden"
      >
        <motion.div
          style={{ y, opacity }}
          className="flex-1 flex flex-col items-center justify-center px-4 gap-y-6"
        >
          <div className="w-[700px] flex flex-col items-center justify-center text-center -translate-y-10">
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

        <div className="w-full flex flex-row h-[300px] gap-2">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className={`flex-1 ${item.bg} ${item.rounded} flex items-center justify-center origin-bottom`}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-[1900px]">hello</div>
    </>
  );
};
 */

"use client";

import { UserIcon } from "lucide-react";
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

      {/* Sticky icon that shrinks */}
      <div className="relative h-[300vh] w-full">
        <div
          ref={iconContainerRef}
          className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-0"
        >
          <motion.div
            style={{ scale }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-full bg-yellow-300 w-60 h-60 flex items-center justify-center border border-black"
          >
            <UserIcon className="w-40 h-40 text-black" />
          </motion.div>
        </div>
      </div>

      <div className="h-[100vh]" />
    </motion.div>
  );
};
