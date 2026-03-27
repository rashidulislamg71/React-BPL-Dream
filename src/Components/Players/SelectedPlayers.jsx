import { FiDelete } from "react-icons/fi";
import { ImFileEmpty } from "react-icons/im";
import { toast } from "react-toastify";

function SelectedPlayers({ setSelectedPlayers, selectedPlayers, setCoin }) {
  const deleteSelectedPlayer = (player) => {
    const playerDelete = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.id !== player.id,
    );
    setSelectedPlayers(playerDelete);
    setCoin((prev) => prev + player.price);
    toast(
      `Successfully to Delete ${player.playerName} for  $${player.price}  !`,
    );
  };

  return (
    <>
      {selectedPlayers.length > 0 ? (
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
      ) : (
        <div>
          <h2 className="flex flex-col items-center justify-center py-20 text-center text-4xl text-bold text-red-600">
            <ImFileEmpty /> No players Select!
          </h2>
        </div>
      )}
    </>
  );
}

export default SelectedPlayers;
