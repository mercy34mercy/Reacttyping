import "./Rank.css"

type props = {
    rank: number
}

export const Rank = (props: props) => {
    return (
        <a className="rank">{props.rank}位</a>
    )
}