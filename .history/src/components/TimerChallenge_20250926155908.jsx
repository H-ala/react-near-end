import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {

  function handleStart() {
    const [timerExpired, setTimerExpired] = useState(false);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="active">Time is running</p>
    </section>
  );
}
