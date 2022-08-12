import "./Rank.css"



type props = {
    rank: number
}

export const Rank = (props: props) => {
    return (
        <div className="rank">
            <p>{props.rank}位</p>
        </div>

    )
}