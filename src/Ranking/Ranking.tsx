import React, { useState } from "react";
import { RankingBox } from "./RankingBox";
import { FetchRanking } from "../Firebase/FetchRanking";

export const Ranking = () => {

    const { rankingdata, loadflag } = FetchRanking()

        return (
            <div>
            <RankingBox rankdata={rankingdata} flag={loadflag} />
            </div>
        )
    
}
