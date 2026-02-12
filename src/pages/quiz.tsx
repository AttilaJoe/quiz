import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchQuestions } from "../services/api";
import type { Question } from "../types/question";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/progressBar";
import Result from "./result";
import { logout } from "../auth/auth";

const Quiz = () => {
  const { data, loading, error } =
    useFetch<Question[]>(fetchQuestions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  const handleAnswer = (answer: string) => {
    if (answer === data[currentIndex].correct_answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex === data.length - 1) {
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const progress = ((currentIndex + 1) / data.length) * 100;

  if (finished) {
    return <Result score={score} total={data.length} />;
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>

      <ProgressBar progress={progress} />

      <QuestionCard
        question={data[currentIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
