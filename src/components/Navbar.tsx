"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="w-full h-10 flex items-center justify-center my-4 fixed top-0 left-0 z-50 bg-transparent">
      <div
        className="w-auto h-[40px] bg-[#232323] text-white flex items-center gap-2 pl-1 pr-6 rounded-bl-sm rounded-tl-sm"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
        }}
      >
        {/* Orange div on the left */}
        <div className="bg-[#FE6D38] h-[32px] px-2 flex items-center justify-center rounded-[4px]">
          <User className="text-black w-4 h-4 font-bold" />
        </div>

        {/* Text or whatever else inside navbar */}
        <div className="h-[26px] w-auto flex items-center justify-center rounded-full px-2 py-1 bg-[#444342] hover:bg-white group cursor-pointer">
          <p className="text-[11px] font-semibold group-hover:text-black">
            Project
          </p>
        </div>
        <div className="h-[26px] w-auto flex items-center justify-center rounded-full px-2 py-1 hover:bg-white group cursor-pointer">
          <p className="text-[11px] font-semibold group-hover:text-black">
            Navigators
          </p>
        </div>
        <div className="h-[26px] w-auto flex items-center justify-center rounded-full px-2 py-1 hover:bg-white group cursor-pointer">
          <p className="text-[11px] font-semibold group-hover:text-black">
            Rewards
          </p>
        </div>
        <div className="h-[26px] w-auto flex items-center justify-center rounded-full px-2 py-1 hover:bg-white group cursor-pointer">
          <p className="text-[11px] font-semibold group-hover:text-black">
            FAQs
          </p>
        </div>
      </div>
      <motion.button
        layout // 👈 this makes Framer Motion smoothly interpolate layout-related styles
        className="border border-black bg-[#C6FE69] text-black h-[40px] w-[120px] text-[11px] font-semibold flex items-center justify-center overflow-hidden cursor-pointer"
        initial={{ borderRadius: "9999px" }}
        animate={{ borderRadius: "9999px" }}
        whileHover={{ borderRadius: "8px" }}
      >
        Contact
      </motion.button>
    </div>
  );
};
