import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, targetTime, remainingTime }) {
  const dialog = useRef();

  const result = remainingTime <= 0 ? "Lost" : "Won";

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
        The targer time was <strong>{remainingTime} seconds. </strong>
      </p>
      <p>
        You stopped the time with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
