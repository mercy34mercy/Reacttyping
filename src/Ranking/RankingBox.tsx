import { Rank } from "./Rank"
import { Name } from "./Name";
import { Score } from "./Score"
import { Load } from "../Load/Load";



import "./RankingBox.css"
import { useRef } from "react";

type rankingdata = {
    score: number,
    name: string,
}

type rankdataarryay = {
    rankdata: rankingdata[]
    flag: boolean
}


export const RankingBox = (props: rankdataarryay) => {

    var _ = require('lodash');
    const rankingdataRef = useRef(props.rankdata)


    const renderranking = _.uniqBy(rankingdataRef.current,'name').map((element:any, index:number) => {
        console.log(element)
        return (
            <div className="rankbox" key={index}>
                <Rank rank={index+1}></Rank>
                <Name name={element.name}></Name>
                <Score score={element.score}></Score>
            </div>
        )
    })

    if (props.flag) {

        return (
            <div>
                <Load></Load>
            </div>
    )
    } else {
        return (
            <div>
                {renderranking}
            </div>
        )
    }
}