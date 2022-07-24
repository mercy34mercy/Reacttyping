import { Rank } from "./Rank"
import { Name } from "./Name";
import { Score } from "./Score"

type props = {
    rank: number
    score: number
    name:string
}

export const RankingBox = (props:props) => {
    return (
        <div>
            <Rank rank={props.rank}></Rank>
            <Name name={props.name}></Name>
            <Score score={props.score}></Score>
        </div>
    )
}