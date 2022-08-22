import "./start.css"

import React, { createContext, useState} from "react"
import mute from "../assets/mute.svg"
import max from "../assets/max.svg"


export const UserContext = createContext({});

type props = {
    volume:boolean
    setVolume:any
}

export const Volumebutton = (props:props) => {


    const handleimgchange = () => {
        props.setVolume(!props.volume)
    }

    const changeimg = () => {
        if (props.volume) {
            
            return max
        } else {
          
            return mute
        }
    }

    return (
        <div className="volumebutton">
            <button onClick={handleimgchange}><img src={changeimg()} alt="" /></button>
        </div>
    )
    
}