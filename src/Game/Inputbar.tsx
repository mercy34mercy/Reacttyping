import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoman } from '../keyexchange';
import './App.css';
import { QuestionBox } from './QuestionBox';
import { Textoutput } from './TextOutput';
import ReactGA from 'react-ga';
import { questions2 } from './Questionarry';
import { UserContext } from '../Start/Volumebutton';
const TRACKING_ID = "G-PN662GXGJ2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


type InputbarProps = {
    updateInputString: any;
    answerString: string;
    typeStringnum: number;
    answerStringnum: number;
    updatetypeStringlen: any;
    updateanswerTypeStringlen: any;
    starttime: number;
    volume: boolean
}

export const Inputbar = (props: InputbarProps) => {
    const navigate = useNavigate();

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const [misstype, setmisstype] = React.useState(0)
    const [counter, setCounter] = React.useState(0);
    const [questioncounter, setQuestioncounter] = React.useState(0);
    const [questionnumber, setQuestionnumber] = React.useState(getRandomInt(questions2.length));
    const [answerstring, setAnswer] = React.useState("");
    const [cssstyle, setCssStyle] = React.useState("");

    //global context
    const volumeimg = React.useContext(UserContext);


    const [questionstring, setstring] = React.useState([""])
    const questionlength: number = questionstring.length;

    const convert = (str: string) => {
        let i = 0;
        let res = [''];
        while (i < str.length) {
            const [pattern, count] = getRoman(str, i);
            const _res = [];
            for (let j = 0; j < pattern.length; j++)
                _res.push(...res.map(item => item + pattern[j]));
            res = _res;
            i += count;
        }
        console.log(res);
        setstring(res)
    }


    const judgement = (value: string) => {
        let newquestion = questionstring
        let flag: boolean = false
        if (value === "") {
            props.updateInputString("")
        } else {
            setmisstype(misstype + 1)
            props.updateInputString("")
        }
        questionstring.forEach(element => {
            if (element[counter] === value) {
                flag = true
            }
        });

        if (flag) {
            sound()
            questionstring.forEach(ele => {
                if (ele[counter] == value) {
                    console.log("正解", ele[counter])

                }
                else {
                    console.log("ele[counter]", ele[counter])
                    newquestion = newquestion.filter(item => item !== ele);
                    console.log(questionstring)
                }
            })
            props.updateInputString("")
            setstring(newquestion)
            props.updateanswerTypeStringlen(props.answerStringnum + 1)
            setAnswer(answerstring + value)
            setCounter(counter + 1)
        }
    }


    useEffect(() => {
        console.log(props.starttime)
        if (questioncounter >= 11) {
            const endTime = Date.now()
            console.log(endTime);
            const time: number = endTime - props.starttime
            navigate("/result", { state: { answernum: props.answerStringnum, time: time, misstyping: misstype } })
        }

        judgement(props.answerString)
        for (let i = 0; i < questionstring.length; i++) {
            if (questionstring[i].length === counter) {
                const rand = getRandomInt(questions2.length)
                setQuestionnumber(rand)
                setQuestioncounter(questioncounter + 1)
                setAnswer("")
                setCounter(0)
                nextsound()
            }
        }
    })

    useEffect(() => {
        convert(questions2[questionnumber][1])
    }, [questionnumber])


    const sound = () => {
        if (props.volume) {
            const audio = new Audio('./key.mp3')
            audio.play()
        }
    }

    const nextsound = () => {
        if (props.volume) {
            const next = new Audio('./ok.mp3')
            next.play()
        }
    }




    const textOutputList = questionstring[0].split('').map((questionChar, index) => {
        return (
            <a><Textoutput key={questionChar} valuekey={index + 1} value={questionChar} answernum={counter}> </Textoutput></a>
        )
    })



    return (
        <div className={'inputbar ' + cssstyle}>
            <div className='game'>
                <QuestionBox question={questions2} questionnum={questionnumber}></QuestionBox>
                <div className='textOutput'>{textOutputList}</div>
            </div>
        </div>
    )

}