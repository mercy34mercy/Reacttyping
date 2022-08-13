import React, { useState } from "react";
import { RankingBox } from "./RankingBox";
import { FetchRanking } from "../Firebase/FetchRanking";
import "./Ranking.css"

export const Ranking = () => {

    const { rankingdata, loadflag } = FetchRanking()

        return (
            <div className="ranking">
            <RankingBox rankdata={rankingdata} flag={loadflag} />
            </div>
        )
    
}
