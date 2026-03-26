import React, { use, useState } from "react";
import Players from "./Players";

function AvailablePlayers({ playerPromise }) {
  const [btnBg, setBtnBg] = useState("available");
  const player = use(playerPromise);
  return (
    <div className="px-10">
      <div className="flex justify-between items-center py-5 mt-10 mb-5 ">
        <h2 className="font-bold text-3xl ">Available Players</h2>
        <div className="">
          <button
          onClick={()=> setBtnBg("available")}
            className={`btn  rounded-r-none ${btnBg === "available" ? "bg-amber-400 text-white" : ""}`}
          >
            Available
          </button>
          <button
          onClick={()=> setBtnBg("selected")}
            className={`btn rounded-l-none  ${btnBg === "selected" ? "bg-amber-400 text-white" : ""} `}
          >
            Selected
          </button>
        </div>
      </div>

      <Players player={player} />
    </div>
  );
}

export default AvailablePlayers;
