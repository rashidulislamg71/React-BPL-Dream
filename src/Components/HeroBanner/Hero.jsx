import React from "react";
import heroBanner from "../../assets/banner-main.png";

function Hero() {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center py-20 bg-linear-to-r from-violet-500 to-fuchsia-500">
        <img className="" src={heroBanner} alt="hero banner" />
        <h2 className="font-bold text-2xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-gray-200">Break Boundaries, Go Beyond Limits</p>
        <button className="py-2 px-5 rounded bg-linear-to-r from-amber-500 to-orange-500 font-bold text-white cursor-pointer transition duration-300 hover:scale-105 hover:shadow-lg">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}

export default Hero;
