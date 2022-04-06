import React, { useEffect, useCallback } from 'react';
import './App.css';



const Index = () => {
  return (
    <div className=''></div>
  )
}

export const Game = () => {
  const [inputString, setinputString] = React.useState("")

  useEffect(() => {
    document.addEventListener("keydown", keyFunction, false)
  })



  const keyFunction = useCallback((event) => {
    setinputString(event.key)
  }, []);


  return (
    <div className='Game'>
      <Inputbar answerString={inputString}></Inputbar>
    </div>
  )
}

type InputbarProps = {
  answerString: string;
}

const Inputbar = (props: InputbarProps) => {
  const questions: string[] = ["watnow", "gutti", "react", "vue", "kotlin", "swift", "python"]
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [answerstring, setAnswer] = React.useState("");
  const questionlength: number = questions[questioncounter].length;
  const [gamestart, setGamestart] = React.useState(false);

  // const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   judgement(e.key)
  // }

  const gameStart = () => {
    setGamestart(true)
  }

  const judgement = (value: string) => {
    if (questions[questioncounter][counter] === value) {
      sound()
      setAnswer(answerstring + value)
      setCounter(counter + 1)
      const c = counter
      console.log("value", value, "counter", c)
      console.log("正解")
    }
  }

  useEffect(() => {
    if (gamestart) {
      judgement(props.answerString)
    }
    if (questionlength === counter) {
      setQuestioncounter(questioncounter + 1)
      setAnswer("")
      setCounter(0)
    }
  })


  const sound = () => {
    const audio = new Audio('./Buttons.mp3')
    audio.play()
  }




  const textOutputList = questions[questioncounter].split('').map((questionChar, index) => {
    return (
      <a><Textoutput key={questionChar} valuekey={index + 1} value={questionChar} answernum={counter}> </Textoutput></a>
    )
  })


  if (gamestart) {
    return (
      <div className='inputbar'>
        <div className='game'>
          <QuestionBox question={questions} questionnum={questioncounter}></QuestionBox>
          <div className='textOutput'>{textOutputList}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='startGame'>
      <StartGame onClick={gameStart}></StartGame>
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
  question: string[];
  questionnum: number;
}

type StartGameProps = {
  onClick: any
}

const StartGame = (props: StartGameProps) => {
  return (
    <div className='manue'>

      <p><img className='kanban' src="./kanban.png"></img></p>
      <p><img className='startButton' src="./startbutton.png" onClick={props.onClick}></img></p>
    </div>
  )
}

const QuestionBox = (props: QuestionProps) => {
  return (
    <div className='questionBox'>
      {props.question[props.questionnum]}
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
