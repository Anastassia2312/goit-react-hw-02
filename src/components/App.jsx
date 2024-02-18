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
  const totalFeedback = rating.good + rating.neutral + rating.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback !== 0 ? <Feedback value={rating} /> : <Notification />}
    </>
  );
}

export default App;
