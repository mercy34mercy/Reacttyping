import { onAuthStateChanged,  Auth,  User } from "firebase/auth";
import { useState } from "react";


export const Checklogin = (auth: Auth) => {
    const [users, setusers] = useState<User|null>(null) 
    const [loginflag,setloginflag] = useState<boolean>(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setusers(user)
            setloginflag(true)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return users
}