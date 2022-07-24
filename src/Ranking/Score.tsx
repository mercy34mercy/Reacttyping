type props = {
    score: number,
}

export const Score = (props:props) => {
    return (
        <a>{ props.score }</a>
    )
}