import React, { useEffect } from 'react';
import './start.css';
import { firebaseApp } from "../firebase"
import { Checklogin } from '../checklogin';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, Auth, AuthProvider, User, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const Login = () => {
    const [loginflag, setloginflag] = React.useState(false)
    const [auth, setauth] = React.useState(firebaseApp.fireauth)
    const [username, setusername] = React.useState<string | null>("")
    const [user, setuser] = React.useState<User | undefined>(Checklogin(auth))

    useEffect(() => {
        checklogin(auth)
    }, [])

    const checklogin = (auth: Auth) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setloginflag(true)
                setuser(user)
                setusername(user.displayName)
                // ...
            } else {
            }
        });
    }

    const popup = (auth: Auth, provider: AuthProvider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                setusername(user.displayName)
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
            })
    };

    const logout = () => {
        firebaseApp.fireauth.onAuthStateChanged((user) =>{
            firebaseApp.fireauth.signOut().then(() => {
                console.log("ログアウト")
                setloginflag(false)
            }).catch((error) => {
                console.log(error)
            })

        })
    
    }

    const handleclick = () => {
        popup(auth, provider)
    }

    const handlelogout = () => {
        logout()
    }

    if (loginflag) {
        return (
            <div className='displayname'>
                <button className='logout'  onClick={handlelogout}>ログアウト</button>
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