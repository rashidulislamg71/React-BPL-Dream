import React, { use, useState } from "react";
import Players from "./Players";
import SelectedPlayers from "./SelectedPlayers";

function AvailablePlayers({ playerPromise }) {
  const [available, setAvailable] = useState("available");
  const player = use(playerPromise);
  return (
    <div className="px-10">
      <div className="flex justify-between items-center py-5 mt-10 mb-5 ">
        {available === "available" ? (
          <h2 className="font-bold text-3xl ">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl ">Selected Players (2/7) </h2>
        )}

        <div className="">
          <button
            onClick={() => setAvailable("available")}
            className={`btn  rounded-r-none ${available === "available" ? "bg-amber-400 text-white" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setAvailable("selected")}
            className={`btn rounded-l-none  ${available === "selected" ? "bg-amber-400 text-white" : ""} `}
          >
            Selected
          </button>
        </div>
      </div>

      {available === "available" ? (
        <Players player={player} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
}

export default AvailablePlayers;
