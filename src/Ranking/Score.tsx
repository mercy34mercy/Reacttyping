import "./Score.css"

type props = {
    score: number,
}

export const Score = (props: props) => {
    return (
        <div className="score">
            <p>{props.score}</p>
        </div>
    )
}