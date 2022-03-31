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
      setCounter(counter + 1)
      setAnswer(answerstring + value)
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

  return (
    <div className='inputbar' onKeyDown={(e) => handleKey(e)} tabIndex={0}>
      <QuestionBox question={questions} questionnum={questioncounter}></QuestionBox>
      <Textoutput text={answerstring} num={counter} questionnum={questionlength}></Textoutput>
    </div>
  )
}


type TextOutputProps = {
  text: string
  num: number
  questionnum: number
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
  return (
    <div className='textoutput'>
      <p>{props.text}</p>
      <p>{props.num}</p>
    </div>
  )
}

export default Game;
