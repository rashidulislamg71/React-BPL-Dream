import React, { useState } from "react";
import { FaFlag, FaUserAlt, FaStar } from "react-icons/fa";

function PlayerCard({ player }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden  m-4 w-full md:w-72 lg:w-80">
      {/* Player Image */}
      <div className="h-52 w-full ">
        <img
          className="w-full h-full"
          src={player.img}
          alt={player.playerName}
        />
      </div>

      {/* Player Info */}
      <div className="p-4 flex flex-col gap-3">
        {/* Name and Type */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FaUserAlt /> {player.playerName}
          </h2>
        </div>

        {/* Country */}
        <div className="flex justify-between items-center gap-2 ">
          <span className="flex items-center gap-1 text-gray-500">
            <FaFlag className="text-sm" /> {player.playersCountry}
          </span>
          <p className="py-0.5 px-2 rounded bg-gray-100 ">
            {player.playerType}
          </p>
        </div>

        {/* Rating */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-3">
          <p>Rating</p>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{player.rating}</span>
          </span>
        </div>

        {/* Batting & Bowling */}
        <div className="flex justify-between text-gray-600">
          <p>{player.battingStyle}</p>
          <p>{player.bowlingStyle}</p>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-lg text-gray-800">${player.price}</p>
          <button
            onClick={() => setIsSelected(!isSelected)}
            disabled={isSelected}
            className=" btn "
          >
            {isSelected ? "Selected" : "Choose Players"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
