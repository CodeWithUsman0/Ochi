import React, { useEffect, useState } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full  bg-[#CDEA68] rounded-t-2xl flex flex-col justify-center items-center relative py-[30vh]"
    >
      {["ready", "to start", "the project ?"].map((item, index) => (
        <h1 className="uppercase text-[12vw] text-zinc-900 leading-[10vw] tracking-tighter font-semibold font-Founders_semibold">
          {item}
        </h1>
      ))}
      <div className="eyes absolute w-1/3  h-[12vw] flex gap-8 justify-center">
        <div className="whitecircle h-[12vw] w-[12vw] bg-zinc-100 rounded-full flex justify-center items-center">
          <div className="blackcircle h-[8vw] w-[8vw] bg-zinc-900 rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-[2vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="smallwhite h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="whitecircle h-[12vw] w-[12vw] bg-zinc-100 rounded-full flex justify-center items-center">
          <div className="blackcircle h-[8vw] w-[8vw] bg-zinc-900 rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-[2vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="smallwhite h-[2vw] w-[2vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
