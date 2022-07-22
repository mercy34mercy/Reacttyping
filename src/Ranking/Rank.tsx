type props = {
    rank: number
}

export const Rank = (props: props) => {
    return (
        <a>{props.rank}</a>
    )
}