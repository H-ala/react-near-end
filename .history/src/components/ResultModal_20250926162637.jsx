export default function ResultModal({ result, targetTime }) {
  return (
    <dialog>
      <h2>You {result}!</h2>
      <p>The targer time was <strong>{targetTime} seconds. </strong></p>
      <p>You stopped the time with X seconds left</p>
    </dialog>
  );
}
