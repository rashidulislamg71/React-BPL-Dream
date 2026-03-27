import React, { use, useState } from "react";
import Players from "./Players";
import SelectedPlayers from "./SelectedPlayers";

function AvailablePlayers({ playerPromise, setCoin, coin }) {
  const [available, setAvailable] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const player = use(playerPromise);

  return (
    <div className="px-10">
      <div className="flex justify-between items-center py-5 mt-10 mb-5 ">
        {available === "available" ? (
          <h2 className="font-bold text-3xl ">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl ">
            Selected Players ({`${selectedPlayers.length}/${player.length}`}
            ){" "}
          </h2>
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
            Selected {selectedPlayers.length}
          </button>
        </div>
      </div>

      {available === "available" ? (
        <Players
          player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}
    </div>
  );
}

export default AvailablePlayers;
