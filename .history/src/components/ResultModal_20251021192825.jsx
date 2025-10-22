import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>تو باختی!</h2>}
      {!userLost && <h2>امتیاز : {score}</h2>}
      <p>
        زمان تارگت شما <strong>{targetTime} ثانیه بود. </strong>
      </p>
      <p>
        زمان رو وقتی 
        <strong> {formattedRemainingTime} ثانیه مونده بود متوقف کردی. </strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>بستن</button>
      </form>
    </dialog>, 
    document.getElementById("modal")
  );
}
