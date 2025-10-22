import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, targetTime, remainingTime }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0 ?? "Lost";
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}!</h2>
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
