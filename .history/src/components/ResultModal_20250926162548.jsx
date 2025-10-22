export default function ResultModal({ result, targetTime }) {
  return (
    <dialog>
      <h2>You {result}!</h2>
      <p>The targer time was {targetTime} </p>
    </dialog>
  );
}
