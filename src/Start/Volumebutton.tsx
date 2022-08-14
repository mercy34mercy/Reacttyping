import "./start.css"

import React, { createContext, useContext } from "react"
import mute from "../assets/mute.svg"
import max from "../assets/max.svg"


export const Volumebutton = () => {
    const [volumeimg, setimg] = React.useState<boolean>(true)


    const handleimgchange = () => {
        setimg(!volumeimg)
    }

    const changeimg = () => {
        if (volumeimg) {
            
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