import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity")
  const [isClicked, setIsClicked] = useState(false)

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  function handleClick(){
    setIsClicked(prevState => !prevState)
    setPlayerName("")
  }
  return (
    <section id="player">
      <h2>Welcome {isClicked ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
