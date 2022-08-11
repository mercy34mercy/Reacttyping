import React, { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Inputbar } from './Inputbar';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-PN662GXGJ2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

export const Game = () => {
    const [startTime, setstartTime] = React.useState(Date.now())
    // const [endTime,setendTime] = React.useState(performance.now())
    const [inputString, setinputString] = React.useState("")
    const [typeStringlen, settypeStringlen] = React.useState(0)
    const [answerTypeStringlen, setanswerTypeStringlen] = React.useState(0)
    const navigate = useNavigate();



    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false)
    })

    const keyFunction = useCallback((event) => {
        if (event.key == "Escape") {
            navigate("/")
        }
        setinputString(event.key)
    }, []);


    return (
        <div className='Game'>
            <Inputbar updateInputString={setinputString} answerString={inputString} updatetypeStringlen={settypeStringlen} updateanswerTypeStringlen={setanswerTypeStringlen} typeStringnum={typeStringlen} answerStringnum={answerTypeStringlen} starttime={startTime} ></Inputbar>
        </div>
    )
}