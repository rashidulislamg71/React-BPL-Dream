import React, { useState } from "react";

function SelectedPlayers() {
  const [selected, setSelected] = useState([]);
  console.log(selected)

  const handleSelected = (player) =>{
    setSelected(perv => [...perv, player]);
  };

  return (
    <>
    
    </>
  )
}

export default SelectedPlayers;
