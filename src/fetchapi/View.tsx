import { Fetch } from "./Fetch"
import React, { useEffect } from "react"
import "./view.css"

export const View = () => {
    const { questiondata, loadflag } = Fetch()
    const Refquestion = React.useRef(questiondata)



    if(loadflag){
        return (
            <div>Loding</div>
        )
    }else{
        return (
            <div className="test">
            <ul>
            {Refquestion.current.map((d) => (
              <li>{d.question}{ d.question_kana} </li>
            ))}
          </ul>
          </div>
        )
    }

}