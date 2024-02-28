import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-16 border-t-[1px] border-zinc-300 ">
      <div className="cardcontainer w-1/2 h-[55vh]">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-3 py-1 border-[1px] rounded-full border-[#CDEA68] text-[#CDEA68] font-Neue_Montreal">
            @2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
        <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex justify-center items-center relative">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-2 py-1 border-[1px] rounded-full text-sm font-Neue_Montreal uppercase">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex justify-center items-center relative">
          <img
            className="w-24 h-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-2 py-1 border-[1px] rounded-full text-sm font-Neue_Montreal uppercase">
            business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
