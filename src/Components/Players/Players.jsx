import React from "react";
import PlayerCard from "./PlayerCard";

function Players({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {player.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            setCoin={setCoin}
            coin={coin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </ul>
    </div>
  );
}

export default Players;
