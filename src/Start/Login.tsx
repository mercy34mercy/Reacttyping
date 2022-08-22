import React, { useEffect } from 'react';
import './start.css';
import { firebaseApp } from "../Firebase/firebase"
import { Checklogin } from '../Firebase/checklogin';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, Auth, AuthProvider, User, getAuth } from "firebase/auth";
import { LoginButton } from './Login_button';
import { addEmitHelper } from 'typescript';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const Login = () => {
    const [loginflag, setloginflag] = React.useState(false)
    const [auth, setauth] = React.useState(getAuth())
    const [user, setuser] = React.useState<User | null>(Checklogin(auth))

    useEffect(() => {
        checklogin(auth)
    }, [user])

    const checklogin = (auth: Auth) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setloginflag(true)
                setuser(user)
            } else {
            }
        });
    }

    const popup = (auth: Auth, provider: AuthProvider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setuser(user)
                setloginflag(true)
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    };

    const logout = () => {
            firebaseApp.fireauth.signOut().then(() => {
                console.log("ログアウト")
                setloginflag(false)
                setuser(user)
            }).catch((error) => {
                console.log(error)
            })

        
    }

    const handlelogin: React.MouseEventHandler<HTMLButtonElement> = () => {
        popup(auth, provider);
    }

    const handlelogout: React.MouseEventHandler<HTMLButtonElement> = () => {
        logout();
    }


    return(
        <LoginButton handlelogin={handlelogin} handlelogout={handlelogout} loginflag={loginflag} username={user?.displayName}/>
    )
    
}