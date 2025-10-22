import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity")
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
}
