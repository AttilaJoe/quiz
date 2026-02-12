interface Props {
    score: number;
    total: number;
}

const Result = ({ score, total }: Props) => {
    return (
        <div>
        <h1>Quiz Selesai 🎉</h1>
        <h2>
            Skor: {score} / {total}
        </h2>
        </div>
    );
};

export default Result;
