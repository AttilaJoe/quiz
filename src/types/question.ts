export interface ApiQuestion {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Question extends ApiQuestion {
    options: string[];
}
