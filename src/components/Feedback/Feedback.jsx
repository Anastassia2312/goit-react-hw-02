export default function Options({ value, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </div>
  );
}
