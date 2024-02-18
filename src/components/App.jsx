import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setRating((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positiveFeedback = Math.round(
    ((rating.good + rating.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        onReset={handleReset}
        updateFeedback={updateFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          value={rating}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
