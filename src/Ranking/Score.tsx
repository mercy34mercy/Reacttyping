import "./Score.css"

type props = {
    score: number,
}

export const Score = (props:props) => {
    return (
        <a className="score">{ props.score }</a>
    )
}