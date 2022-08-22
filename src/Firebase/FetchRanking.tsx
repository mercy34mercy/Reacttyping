import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { firebaseApp } from "./firebase";
import React from "react";
import { cpSync } from "fs";

type props = {
    score: number,
    name: string,
}

export const FetchRanking = () => {
    const [loadflag, setflag] = React.useState(true)
    let rankingdata: props[] = []
    const Fetchfirebase = async () => {
        const q = query(collection(firebaseApp.db, "ranking"), orderBy("score", "desc"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const setdata: props = {
                score: doc.data().score,
                name: doc.data().name
            }
            rankingdata.push(setdata)
        });
        setflag(false)
    }

    Fetchfirebase()

    return { rankingdata, loadflag }
}