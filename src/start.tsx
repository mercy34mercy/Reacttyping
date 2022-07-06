import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './firebase';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');





signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

const handleclick = () => {
    const auth = getAuth()
    signInWithPopup(auth,provider)
}


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
                <div>
                    <p onClick={handleclick}>ログイン</p>
                </div>
                <div className='manuebar'>
                    <p><img className='kanban' src="./kanban.png"></img></p>
                    {/* <p><Link to="game"><img className='startButton' src="./start.png"></img></Link></p> */}
                </div>
                <div className='start'>
                    <p className='startButton'>スペースキーでスタート</p>
                </div>
            </div>
        </div>
    )
}