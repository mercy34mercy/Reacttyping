import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

export const Startview = () => {
    return (
        <div className='manue'>

            <p><img className='kanban' src="./kanban.png"></img></p>
            <p><Link to="game"><img className='startButton' src="./startbutton.png"></img></Link></p>
        </div>
    )
}