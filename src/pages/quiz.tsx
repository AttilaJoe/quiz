import { useEffect, useState, useRef } from "react";
import "./quiz.css";

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options: string[];
}

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);
  const [answers, setAnswers] = useState<String[]>([]);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchQuestions = async () => {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
      );
      const data = await res.json();

      const formatted = data.results.map((q: any) => ({
        ...q,
        options: shuffleArray([
          q.correct_answer,
          ...q.incorrect_answers,
        ]),
      }));

      setQuestions(formatted);
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (questions.length === 0) return <p>Tidak ada soal</p>;

  const handleSubmit = () => {
  let score = 0;
  questions.forEach((q, index) => {
    if (answers[index] === q.correct_answer) {
      score++;
    }
  })
};
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null); // reset pilihan untuk soal berikutnya
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex-1);
      setSelected(null);
    }
  }

  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;


  return (
    <div className="quiz-container">
      <h2 className="title">Fantasy Quiz #{currentIndex + 1}</h2>

      <div className="progress-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
        <span>
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      <h3
        className="question"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="options">
        {question.options.map((opt, index) => (
          <div
            key={index}
            className={`option-card ${
              selected === opt ? "selected" : ""
            }`}
            onClick={() => setSelected(opt)}
          >
            {selected === opt && <span className="check"></span>}
            <span dangerouslySetInnerHTML={{ __html: opt }} />
          </div>
        ))}
      </div >
      <div className="buttons"
      style={{
        display:"flex",
        flexDirection:"row"
      }}>
        <button className="back-btn" onClick={handleBack}>BACK</button>
        <button className="next-btn" onClick={currentIndex === questions.length-1?handleSubmit: handleNext}>{currentIndex === questions.length - 1? "FINISH": "NEXT"}</button>
      </div>
    </div>
  );
};

export default Quiz;
