import type { Question } from "../types/question";

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
}

const QuestionCard = ({ question, onAnswer }: Props) => {
  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />

      {question.options.map((opt, index) => (
        <button key={index} onClick={() => onAnswer(opt)}>
          <span dangerouslySetInnerHTML={{ __html: opt }} />
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
