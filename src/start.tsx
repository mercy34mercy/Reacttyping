import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import { firebaseApp } from "./firebase"
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, Auth, AuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');







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
                <Login></Login>
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

export const Login = () => {
    const [loginflag, setloginflag] = React.useState(false)
    const [auth, setauth] = React.useState(firebaseApp.fireauth)
    const [username, setuser] = React.useState<string | null>("")

    useEffect(() => {
        checklogin(auth)
    },[])

    const checklogin = (auth:Auth) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setloginflag(true)
                setuser(user.displayName)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }

    const popup = (auth: Auth, provider: AuthProvider) => {
        signInWithPopup(auth,provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            setuser(user.displayName)
            setloginflag(true)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })};
    const handleclick = () => {
        popup(auth,provider)
    }

    if (loginflag) {
        return (
            <div className='displayname'>
                <button className='logout'>ログアウト</button>
                <p className='name'>ようこそ{username}さん</p>
            </div>
        )
    } else {
        return (
            <div className='login'>
                <button className='loginbutton' onClick={handleclick}>ログイン</button>
            </div>
        )
    }
}