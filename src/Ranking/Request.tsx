import React, { useEffect,useRef } from "react"
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";


type rankdata = {
    rank:number,
    name:string,
    score:number
}

export const Request = () => {
    const [Loading,setLoadin] = React.useState(true)
    const [rankingdata, setrankingdata] = React.useState<rankdata[]>([])
    const [isLoading,setisLoading] = React.useState(false)

    const currentrankref = useRef(rankingdata)

    useEffect(() => {
        if(Loading==true){
            setisLoading(true)

            const dbRef = ref(getDatabase());

            get(child(dbRef,'ranking/')).then((DataSnapshot)=>{
                console.log("data",DataSnapshot)
                if(DataSnapshot.exists()){
                    DataSnapshot.forEach((element)=>{
                        console.log(element.val())
                        const setdata:rankdata = {
                            rank:element.val().rank,
                            name:element.val().name,
                            score:element.val().score
                        }
                        rankingdata.push(setdata)
                    })
                }
            })
        }else{
            currentrankref.current = rankingdata
            setisLoading(false)
            setrankingdata(rankingdata)
        }
    },[])
    return {isLoading,rankingdata}
}