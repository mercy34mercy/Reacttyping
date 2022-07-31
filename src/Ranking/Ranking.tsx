import React from "react";
import { RankingBox } from "./RankingBox";
import { Request } from "./Request";

export const Ranking = () => {

    const {isLoading,rankingdata} = Request()
    return(
        <RankingBox rank={rankingdata[0].rank} score={rankingdata[0].score} name={"masashi"} />
    )
}
