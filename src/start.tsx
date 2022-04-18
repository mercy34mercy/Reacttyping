import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';

export const Startview = () => {
    const navigate = useNavigate();

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

    return (
        <div className='startmanuebar'>
            <div className="sp-dsp">
                <div>
                    <p className='frompc'>PCからアクセスしてください</p>
                </div>
            </div>
            <div className="pc-dsp">
                <div className='manue'>
                    <div className='manuebar'>
                        <p><img className='kanban' src="./kanban.png"></img></p>
                        {/* <p><Link to="game"><img className='startButton' src="./start.png"></img></Link></p> */}
                        <p className='startButton'>スペースキーでスタート</p>
                    </div>
                </div>
            </div>
        </div>
    )
}