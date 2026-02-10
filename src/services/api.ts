import { ApiQuestion, Question } from "../assets/question";

const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};