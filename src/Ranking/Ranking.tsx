import React, { useState } from "react";
import { RankingBox } from "./RankingBox";
import { FetchRanking } from "../Firebase/FetchRanking";
import { Load } from "../Load/Load";

type rankingdata = {
    score: number,
    name: string,
}



export const Ranking = () => {

    const { rankingdata, loadflag } = FetchRanking()

        return (
            // <RankingBox rank={rankingdata[0].rank} score={rankingdata[0].score} name={"masashi"} />
            <RankingBox rankdata={rankingdata} flag={loadflag} />
        )
    
}
