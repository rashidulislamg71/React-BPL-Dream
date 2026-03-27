import { FiDelete } from "react-icons/fi";

function SelectedPlayers({ setSelectedPlayers, selectedPlayers }) {
  console.log(selectedPlayers);

  const deleteSelectedPlayer = (player) => {
    const playerDelete = selectedPlayers.filter((data) => data !== player);
    setSelectedPlayers(playerDelete);
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
                <p>{player.playerType}</p>
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
