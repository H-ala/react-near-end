export default function ResultModal({ result, targetTime }) {
  return (
    <dialog>
      <h2>You {result}!</h2>
      <p>The targer time was <strong>{targetTime}</strong> </p>
    </dialog>
  );
}
