import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './result.css'

export const Result = () => {
    const location = useLocation()
    const [answernum, setansernum] = useState<{ answernum: number }>(location.state as { answernum: number })
    const [time, settime] = useState<{ time: number }>(location.state as { time: number })
    const [misstypingnum, setmisstypingnum] = useState<{ misstyping: number }>(location.state as { misstyping: number })
    const average: number = (answernum.answernum / time.time) * 1000
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false)
    })

    const keyFunction = useCallback((event) => {
        if (event.key === "Escape") {
            navigate("/")
        }
    }, []);

    return (
        <div className='resultbackground'>
            <div className='result_frame'>
                <div className='resultkanban'>
                    <img src="./result.png" alt="結果" />
                </div>
                <div className='result'>
                    <div className='bigbox'>
                        <div className='box'>
                            <p className='avaragenum title'>
                                <div className='left'>へいきんキータイプ</div>
                                <div className='right'>{Math.round(average * 10) / 10}</div>
                            </p>
                            <p className='kana'>keytype-avarage</p>
                        </div>
                        <div className='box'>
                            <p className='typingnum title'>
                                <div className='left'>タイピング</div>
                                <div className='right'>{answernum.answernum}</div>
                            </p>
                            <p className='kana'>typing-count</p>
                        </div>
                        <div className='box'>
                            <p className='misstypingnum title'>
                                <div className='left'>ミスタイピング</div>
                                <div className='right'>{misstypingnum.misstyping}</div>
                            </p>
                            <p className='kana'>miss-type-count</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='backtohome'>Escapeでもどる</p>
                </div>
            </div>
        </div>
    );
}

