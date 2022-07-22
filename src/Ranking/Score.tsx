type props = {
    name: string,
    score: number,
    rank:number
}

export const Score = (props:props) => {
    return (
        <a>{ props.score }</a>
    )
}