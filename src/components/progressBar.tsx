interface Props {
    progress: number;
}

const ProgressBar = ({ progress }: Props) => (
    <div style={{ width: "100%", background: "#eee", height: 8 }}>
        <div
            style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4CAF50",
            }}
        />
    </div>
);

export default ProgressBar;
