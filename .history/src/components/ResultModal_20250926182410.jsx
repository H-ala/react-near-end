import { useImperativeHandle } from "react";

export default function ResultModal({ ref, result, targetTime }) {
  useImperativeHandle(ref, () => {});

  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}!</h2>
      <p>
        The targer time was <strong>{targetTime} seconds. </strong>
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
