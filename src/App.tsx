import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export const Game = () => {
  const [inputString, setinputString] = React.useState("")
  const [typeStringlen, settypeStringlen] = React.useState(0)
  const [answerTypeStringlen, setanswerTypeStringlen] = React.useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", keyFunction, false)
    console.log("answernum", answerTypeStringlen)
  })




  const keyFunction = useCallback((event) => {
    if (event.key == "Escape") {
      navigate("/")
    }
    setinputString(event.key)
  }, []);


  return (
    <div className='Game'>
      <Inputbar answerString={inputString} updatetypeStringlen={settypeStringlen} updateanswerTypeStringlen={setanswerTypeStringlen} typeStringnum={typeStringlen} answerStringnum={answerTypeStringlen}></Inputbar>
    </div>
  )
}

type InputbarProps = {
  answerString: string;
  typeStringnum: number;
  answerStringnum: number;
  updatetypeStringlen: any;
  updateanswerTypeStringlen: any;
}

const Inputbar = (props: InputbarProps) => {
  const navigate = useNavigate();
  const questions2: string[][] = [
    ["烏丸丸太町", "karasumamarutamati"],
    ["四条河原町", "sizyoukawaramati"],
    ["葛野大路五条", "kadonooozigozyou"],
    ["川端御池", "kawabataoike"],
    ["川端二条","kawabatanizyou"],
    ["北白川別当","kitashirakawabettou"],
    ["荒神橋東詰","kouzinbashihigasidume"],
    ["下鴨本通北大路","shimogamohondourikitaoozi"],
    ["百万遍","hyakumanben"],
    ["大宮木津屋橋","oomiyakiduyabashi"],
    ["大宮七条","oomiyashitizyou"],
    ["烏丸御池","karasumaoike"],
    ["河原町御池","kawaramatioike"],
    ["河原町八条","kawaramatihatizyou"],
    ["五条七本松","gozyousitihonnmatu"],
    ["五条御前","gozyouonmae"],
    ["四条河原町","shizyoukawaramati"],
    ["四条西洞院","sizyounishinotouin"],
    ["四条堀川","shizyouhorikawa"],
    ["七条壬生","shitizyoumibu"],
    ["堀川高辻","horikawatakatuzi"],
    ["西大路花屋町","nishioozihanayamati"],
  ]
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [answerstring, setAnswer] = React.useState("");
  const [cssstyle, setCssStyle] = React.useState("")
  const questionlength: number = questions2[questioncounter][1].length;

  const judgement = (value: string) => {
    if (questions2[questioncounter][1][counter] === value) {
      sound()
      props.updateanswerTypeStringlen(props.answerStringnum + 1)
      setAnswer(answerstring + value)
      setCounter(counter + 1)
    }
    // props.updatetypeStringlen(props.typeStringnum + 1)
  }

  useEffect(() => {
    if (questioncounter > 10) {
      navigate("/result")
    }

    judgement(props.answerString)

    if (questionlength === counter) {
      setQuestioncounter(questioncounter + 1)
      setCssStyle("baranimation")
      setAnswer("")
      setCounter(0)
    }
  })


  const sound = () => {
    const audio = new Audio('./Buttons.mp3')
    audio.play()
  }




  const textOutputList = questions2[questioncounter][1].split('').map((questionChar, index) => {
    return (
      <a><Textoutput key={questionChar} valuekey={index + 1} value={questionChar} answernum={counter}> </Textoutput></a>
    )
  })



  return (
    <div className={'inputbar ' + cssstyle}>
      <div className='game'>
        <QuestionBox question={questions2} questionnum={questioncounter}></QuestionBox>
        <div className='textOutput'>{textOutputList}</div>
      </div>
    </div>
  )

}


type TextOutputProps = {
  children: string;
  key: string;
  value: string;
  answernum: number;
  valuekey: number;
}

type QuestionProps = {
  question: string[][];
  questionnum: number;
}


const QuestionBox = (props: QuestionProps) => {
  return (
    <div className='questionBox'>
      {props.question[props.questionnum][0]}
    </div>
  );
}

const Textoutput = (props: TextOutputProps) => {
  console.log("key", props.answernum)
  if (props.valuekey <= props.answernum) {
    return (
      <a className='colorGray'>
        {props.value}
      </a>
    )
  }
  return (
    <a className='colorwhiteGray'>
      {props.value}
    </a>
  )
}

export default Game;
