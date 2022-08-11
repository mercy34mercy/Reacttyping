import React, { useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import { Login } from './Login';
import { Volumebutton } from './Volumebutton';


export const Startview = () => {
    const navigate = useNavigate();


    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);



    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false)
    }
    )

    const keyFunction = useCallback((event) => {
        console.log(event.key)
        if (event.key === " ") {
            navigate("game")
        }
    }, []);

    if (windowDimensions.width < 700) {
        return (
            <div className='startmanuebar'>
                <div>
                    <p className='frompc'>PCからアクセスしてください</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='startmanuebar'>
                <Volumebutton></Volumebutton>
                <Login></Login>
                <div className='manuebar'>
                    <p><img className='kanban' src="./kanban.svg"></img></p>
                </div>
                <div className='start'>
                    <p className='startButton'>スペースキーでスタート</p>
                </div>
            </div>
        )
    }
}


