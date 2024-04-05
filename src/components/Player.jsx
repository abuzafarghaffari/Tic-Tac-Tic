import React, { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
    const [playerName, setPlayerName] = useState(name)
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((prev) => !prev);
  };


  return (
    <li className= {isActive ? "active" :undefined}>
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={(event)=>setPlayerName(event.target.value)}/> : <span className="player-name">{playerName}</span>}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
