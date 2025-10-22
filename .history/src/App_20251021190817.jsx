import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="آسان" targetTime={1} />
        <TimerChallenge title="متوسط " targetTime={5} />
        <TimerChallenge title="سخت" targetTime={10} />
        <TimerChallenge title="حرفه ای " targetTime={15} />
      </div>
    </>
  );
}

export default App;
