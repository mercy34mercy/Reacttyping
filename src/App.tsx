import { count } from 'console';
import React, { useCallback, useEffect } from 'react';
import './App.css';

const Game = () => {
  return (
    <Inputbar></Inputbar>
  )
}

const Inputbar = () => {
  const questions: string[] = ["watnow", "gutti", "react", "vue", "kotlin", "swift", "python"]
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [answerstring, setAnswer] = React.useState("")
  const questionlength: number = questions[questioncounter].length

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    judgement(e.key)
  }

  const judgement = (value: string) => {
    if (questions[questioncounter][counter] === value) {
      setAnswer(answerstring + value)
      setCounter(counter + 1)
      const c = counter
      console.log("value", value, "counter", c)
      console.log("正解")
    }
  }

  useEffect(() => {
    if (questionlength === counter) {
      setQuestioncounter(questioncounter + 1)
      setAnswer("")
      setCounter(0)
    }
  })

  

  const textOutputList = questions[questioncounter].split('').map((questionChar, index) => {
    console.log("index",index)
      return(
        <a><Textoutput key={questionChar} valuekey={index+1}value={questionChar} answernum={counter}> </Textoutput></a>
      )
    })


  return (
    <div className='inputbar' onKeyDown={(e) => handleKey(e)} tabIndex={0}>
      <div className='game'>
      <QuestionBox question={questions} questionnum={questioncounter}></QuestionBox>
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
  question: string[];
  questionnum: number;
}

const QuestionBox = (props: QuestionProps) => {
  return (
    <div className='questionBox'>
      {props.question[props.questionnum]}
    </div>
  );
}

const Textoutput = (props: TextOutputProps) => {
  console.log("key",props.answernum)
  if (props.valuekey <= props.answernum) {
    return (
      <a className='colorBlack'>
        {props.value}
      </a>
    )
  }
  return (
    <a className='colorGray'>
      {props.value}
    </a>
  )
}

export default Game;
