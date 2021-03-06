import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, collection,serverTimestamp} from "firebase/firestore";
import { firebaseApp } from "../firebase"
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, Auth, AuthProvider } from "firebase/auth";
import './result.css'
import firebase from 'firebase/app';

export const Result = () => {
    const location = useLocation()
    const [answernum, setansernum] = useState<{ answernum: number }>(location.state as { answernum: number })
    const [time, settime] = useState<{ time: number }>(location.state as { time: number })
    const [misstypingnum, setmisstypingnum] = useState<{ misstyping: number }>(location.state as { misstyping: number })
    const [rank, setrank] = useState(0)
    const [userid, setuserid] = useState("")
    const [loginflag, setloginflag] = React.useState(false)
    const [auth, setauth] = React.useState(firebaseApp.fireauth)
    const [username, setuser] = React.useState<string | null>("")
    const average: number = (answernum.answernum / time.time) * 1000
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false)
    })

    useEffect(() => {
        checklogin(auth)
    }, [])

    const checklogin = (auth: Auth) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuserid(user.uid)
                setloginflag(true)
                setuser(user.displayName)
                writedata(user.uid, Math.round(average * 10) / 10,user.displayName)
                // ...
            } else {
            }
        });
    }

    const keyFunction = useCallback((event) => {
        if (event.key === "Escape") {
            navigate("/")
        }
    }, []);
    


    const writedata = async(id: string, score: number,name:string|null) => {
       // Add a new document in collection "cities"
        const rankRef = collection(firebaseApp.db, 'ranking');
        await setDoc(doc(rankRef), {
            timestamp: serverTimestamp(),
            name:name,
            id: id,
            score: score
        });
    }



    return (
        <div className='resultbackground'>
            <div className='result_frame'>
                <div className='resultkanban'>
                    <img src="./result.svg" alt="??????" />
                </div>
                <div className='result'>
                    <div className='bigbox'>
                        <div className='box'>
                            <p className='avaragenum title'>
                                <div className='left'>???????????????????????????</div>
                                <div className='right'>{Math.round(average * 10) / 10}</div>
                            </p>
                            <p className='kana'>keytype-avarage</p>
                        </div>
                        <div className='box'>
                            <p className='typingnum title'>
                                <div className='left'>???????????????</div>
                                <div className='right'>{misstypingnum.misstyping}</div>
                            </p>
                            <p className='kana'>typing-count</p>
                        </div>
                        <div className='box'>
                            <p className='misstypingnum title'>
                                <div className='left'>?????????????????????</div>
                                <div className='right'>{misstypingnum.misstyping-answernum.answernum}</div>
                            </p>
                            <p className='kana'>miss-type-count</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='backtohome'>Escape????????????</p>
                </div>
            </div>
        </div>
    );
}

