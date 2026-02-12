import type { ApiQuestion, Question } from "../types/question";

const shuffleArray = (array: string[]) =>
    [...array].sort(() => Math.random() - 0.5);

export const fetchQuestions = async (): Promise<Question[]> => {
    const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
    );

    if (!res.ok) throw new Error("Gagal mengambil soal");

    const data = await res.json();

    return data.results.map((q: ApiQuestion) => ({
        ...q,
        options: shuffleArray([
            q.correct_answer,
            ...q.incorrect_answers,
        ]),
    }));
};
