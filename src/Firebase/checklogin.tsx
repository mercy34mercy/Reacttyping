import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, Auth, AuthProvider, User } from "firebase/auth";
import { useState } from "react";


export const Checklogin = (auth: Auth) => {
    const [users, setusers] = useState<User>() 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setusers(user)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return users
}