import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, targetTime, remainingTime }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(1 - remainingTime / targetTime * 1000)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {userLost}!</h2>
      <p>
        The targer time was <strong>{targetTime} seconds. </strong>
      </p>
      <p>
        You stopped the time with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
