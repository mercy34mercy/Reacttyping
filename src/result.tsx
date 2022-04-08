import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './result.css'

export const Result = () => {
    const location = useLocation()
    const [answernum, setansernum] = useState<{ answernum: number }>(location.state as { answernum: number })
    const [time, settime] = useState<{ time: number }>(location.state as { time: number })
    const average:number =(answernum.answernum/time.time)*1000
    return (
        <div>
            <p className='answernum'>{average}</p>
        </div>
    );
}

