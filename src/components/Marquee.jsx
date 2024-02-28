import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.00009"
      className="w-full py-24 bg-[#004D43] rounded-t-3xl "
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 overflow-hidden flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[18vw] font-Founders_semibold  leading-none font-bold uppercase -mb-[2vw] pt-[3vw] pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[18vw] font-Founders_semibold  leading-none font-bold uppercase -mb-[2vw] pt-[3vw] pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
