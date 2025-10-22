import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity")

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  function handleClick(){

  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
