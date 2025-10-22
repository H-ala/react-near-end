import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity")

  function handleChange(event){
    setPlayerName(event.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
