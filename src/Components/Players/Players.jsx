import React from "react";
import PlayerCard from "./PlayerCard";
import { use } from "react";

function Players({ playerPromise }) {
const player = use(playerPromise)
  return (
    <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        player.map(player => <PlayerCard key={player.id} player = {player} />)
      }
    </ul>
    </div>
  );
}

export default Players;
