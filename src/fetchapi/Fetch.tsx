import { METHODS } from "http";
import React from "react";

type props = {
    question: string,
    question_kana: string
}


export const Fetch = () => {
    const [loadflag, setflag] = React.useState(true)
    let questiondata: props[] = []
    const url = "https://typingapi.herokuapp.com/"

    const requestOptions: RequestInit = {
        method: 'GET',
        mode: 'cors',
    };


    const FetchAPI = async () => {
        (async () => {
            try {
                const response = await fetch(url, requestOptions)
                const body = await response.json()


                body.forEach((element:any) => {
                    const setdata:props = {
                        question:element.fields.question_text,
                        question_kana:element.fields.question_text_kana
                    }   
                    questiondata.push(setdata)
                    console.log(setdata)
                });
                setflag(false)
            }
            catch {

            } finally {
            }
        })()

    }

    FetchAPI()

    return { questiondata, loadflag }
}