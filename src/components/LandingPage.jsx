import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { NavbarWrapper } from "react-show-hide-sticky-navbar";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-100 pt-1 "
    >
      <div className="textstructure mt-44 px-16">
        {["We Create", " eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[12vw] h-[5vw] relative -top-[.8vw]  rounded-md mr-[.5vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center "
                  ></motion.div>
                )}
                <h1 className="text-[7vw] uppercase leading-[6vw] tracking-tighter font-Founders_semibold font-semibold text-zinc-900">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-24 flex justify-between items-center py-4 px-8 font-Neue_Montreal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-lg font-normal tracking-tight leading-none text-zinc-900">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <p className="uppercase text-sm font-normal border-[2px] border-zinc-600 rounded-full py-2 px-3 text-zinc-900 font-Neue_Montreal">
            Start the project
          </p>
          <div className="border-zinc-600 border-[2px] rounded-full font-lighter w-9 h-9 flex justify-center items-center text-zinc-900">
            <span className="rotate-45">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
