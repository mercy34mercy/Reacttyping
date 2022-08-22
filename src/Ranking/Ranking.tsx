import React, { useState } from "react";
import { RankingBox } from "./RankingBox";
import { FetchRanking } from "../Firebase/FetchRanking";
import "./Ranking.css"
import img from "../assets/ranking.svg"

export const Ranking = () => {

    const { rankingdata, loadflag } = FetchRanking()

    return (
        <div className="ranking">
            <div className="rankingimg">
                <img src={img} alt="" />
            </div>
            <div className="scroll">
                <RankingBox rankdata={rankingdata} flag={loadflag} />
            </div>
        </div>
    )

}
