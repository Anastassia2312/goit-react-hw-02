import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleGood = () => {
    setRating({
      ...rating,
      good: rating.good + 1,
    });
  };
  const handleNeutral = () => {
    setRating({
      ...rating,
      neutral: rating.neutral + 1,
    });
  };

  const handleReset = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };
  const handleBad = () => {
    setRating({
      ...rating,
      bad: rating.bad + 1,
    });
  };
  return (
    <>
      <Description />
      <Feedback
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
