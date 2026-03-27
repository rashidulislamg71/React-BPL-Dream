import { FiDelete } from "react-icons/fi";

function SelectedPlayers({
  setSelectedPlayers,
  selectedPlayers,
  coin,
  setCoin,
}) {
  console.log(selectedPlayers);

  const deleteSelectedPlayer = (player) => {
    const playerDelete = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.id !== player.id,
    );
    setSelectedPlayers(playerDelete);
    setCoin((prev) => prev + player.price);
  };

  return (
    <>
      <div className="flex flex-col gap-5 justify-center">
        {selectedPlayers.map((player) => (
          <div key={player.id}>
            <div className="card card-side bg-base-100 shadow-sm">
              <figure>
                <img
                  className="h-20 w-20"
                  src={player.img}
                  alt={player.playerName}
                />
              </figure>
              <div className="flex flex-col justify-center ml-2">
                <h2 className="card-title">{player.playerName}</h2>
                <p className="font-semibold text-sm">{player.playerType}</p>
                <p className="font-bold text-sm">Price: ${player.price}</p>
              </div>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <button
                    onClick={() => deleteSelectedPlayer(player)}
                    className="btn btn-primary"
                  >
                    <FiDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectedPlayers;
