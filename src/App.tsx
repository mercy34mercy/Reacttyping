import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-PN662GXGJ2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);



export const Game = () => {
  const [startTime, setstartTime] = React.useState(Date.now())
  // const [endTime,setendTime] = React.useState(performance.now())
  const [inputString, setinputString] = React.useState("")
  const [typeStringlen, settypeStringlen] = React.useState(0)
  const [answerTypeStringlen, setanswerTypeStringlen] = React.useState(0)
  const navigate = useNavigate();



  useEffect(() => {
    document.addEventListener("keydown", keyFunction, false)
  })

  // const random = getRandomInt(20)
  // setrandomcounter(random)




  const keyFunction = useCallback((event) => {
    if (event.key == "Escape") {
      navigate("/")
    }
    setinputString(event.key)
  }, []);


  return (
    <div className='Game'>
      <Inputbar  updateInputString={setinputString} answerString={inputString} updatetypeStringlen={settypeStringlen} updateanswerTypeStringlen={setanswerTypeStringlen} typeStringnum={typeStringlen} answerStringnum={answerTypeStringlen} starttime={startTime}></Inputbar>
    </div>
  )
}

type InputbarProps = {
  updateInputString: any;
  answerString: string;
  typeStringnum: number;
  answerStringnum: number;
  updatetypeStringlen: any;
  updateanswerTypeStringlen: any;
  starttime: number;
}

const Inputbar = (props: InputbarProps) => {
  const navigate = useNavigate();
  const questions2: string[][] = [
    ["烏丸丸太町", "karasumamarutamati"],
    ["四条河原町", "sizyoukawaramati"],
    ["葛野大路五条", "kadonooozigozyou"],
    ["川端御池", "kawabataoike"],
    ["川端二条", "kawabatanizyou"],
    ["北白川別当", "kitashirakawabettou"],
    ["荒神橋東詰", "kouzinbashihigasidume"],
    ["下鴨本通北大路", "shimogamohondourikitaoozi"],
    ["百万遍", "hyakumanben"],
    ["大宮木津屋橋", "oomiyakiduyabashi"],
    ["大宮七条", "oomiyashitizyou"],
    ["烏丸御池", "karasumaoike"],
    ["河原町御池", "kawaramatioike"],
    ["河原町八条", "kawaramatihatizyou"],
    ["五条七本松", "gozyousitihonnmatu"],
    ["五条御前", "gozyouonmae"],
    ["四条河原町", "shizyoukawaramati"],
    ["四条西洞院", "sizyounishinotouin"],
    ["四条堀川", "shizyouhorikawa"],
    ["七条壬生", "shitizyoumibu"],
    ["堀川高辻", "horikawatakatuzi"],
    ["西大路花屋町", "nishioozihanayamati"],
    ["油小路東寺道","aburanokouzitouzimiti"],
    ["河原町十条","kawaramatizyuuzyou"],
    ["九条油小路","kuzyouaburanokouzi"],
    ["九条大宮","kuzyouoomiya"],
    ["九条新町","kuzyousinmati"],
    ["十条烏丸","zyuuzyoukarasuma"],
    ["中山稲荷","nakayamainari"],
    ["西大路九条","nishioozikuzyou"],
    ["八条壬生","hatizyoumibu"]
    
  ]

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const [misstype,setmisstype] = React.useState(0)
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [questionnumber, setQuestionnumber] = React.useState(getRandomInt(30));
  const [answerstring, setAnswer] = React.useState("");
  const [cssstyle, setCssStyle] = React.useState("");
  const questionlength: number = questions2[questionnumber][1].length;

  const judgement = (value: string) => {
    if (questions2[questionnumber][1][counter] === value) {
      sound()
      props.updateanswerTypeStringlen(props.answerStringnum + 1)
      setAnswer(answerstring + value)
      setCounter(counter + 1)
      props.updateInputString("")
    } else if (value === "") {
      props.updateInputString("")
    } else {
      setmisstype(misstype + 1)
      props.updateInputString("")
    }
    // props.updatetypeStringlen(props.typeStringnum + 1)
  }


  useEffect(() => {
    console.log(props.starttime)
    if (questioncounter >= 10) {
      const endTime = Date.now()
      console.log(endTime);
      const time: number = endTime - props.starttime
      navigate("/result", { state: { answernum: props.answerStringnum, time: time,misstyping:misstype } })
    }

    judgement(props.answerString)

    if (questionlength === counter) {
      const rand = getRandomInt(20)
      setQuestionnumber(rand)
      setQuestioncounter(questioncounter+1)
      setAnswer("")
      setCounter(0)
    }
  })


  const sound = () => {
    const audio = new Audio('./Buttons.mp3')
    audio.play()
  }




  const textOutputList = questions2[questionnumber][1].split('').map((questionChar, index) => {
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


// const NewQuestionBox = () => {
//   const q: string[] = ["ひ","が","し","お","お","じ","う","じ","じょ","う" ]
//   const loop = q.map((s, index) => {
//     const r: (string | string[])[] = Key(q[index]+q[index+1])
//       return (
//         r[0][0]
//       )
//     })
//   return (
//     <a>{loop}</a>
//   );
// }

export default Game;
