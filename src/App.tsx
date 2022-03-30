import React, { useCallback, useEffect } from 'react';
import './App.css';

const Game = () => {
  return (
    <Inputbar></Inputbar>
  )
}

const Inputbar = () => {
  const questions: string[] = ["watnow", "gutti","react","vue","kotlin","swift","python"]
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [answerstring,setAnswer] = React.useState("")
  const questionlength:number = questions[questioncounter].length


  const handleKeyDown = useCallback((e) => {
    console.log(e.key)
    if (questions[questioncounter][counter] === e.key) {
      setCounter(counter + 1)
      setAnswer(answerstring + e.key)
      const c = counter
      console.log("value", e.key, "counter", c)
      console.log("正解")
    }
  }, [counter, answerstring,questioncounter])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false)
    if (questions[questioncounter].length === counter) {
      setCounter(0)
      setQuestioncounter(questioncounter + 1)
      console.log("reset")
    }
  }, [counter, answerstring, questioncounter,handleKeyDown])

  // const judgement = (value: string) => {

  //   if (questions[questioncounter][counter] === value) {
  //     setCounter(counter + 1)
  //     setAnswer(answerstring + value)
  //     const c = counter
  //     console.log("value", value, "counter", c)
  //     console.log("正解")
  //   }
  // }

  return (
    <div className='inputbar' onKeyDown={handleKeyDown}>
      <QuestionBox question={questions} questionnum={questioncounter}></QuestionBox> 
      <Textoutput text={answerstring} num={counter} questionnum={questionlength}></Textoutput> 
    </div>
  )
}


type Props = {
  text: string
  num: number
  questionnum:number
}

type QuestionProps = {
  question: string[];
  questionnum: number;
}

const QuestionBox = (props:QuestionProps) => {
  return (
    <div className='questionBox'>
      {props.question[props.questionnum]}
    </div>
  );
}

const Textoutput = (props: Props) => {
  const [str, setstr] = React.useState("")
  
  useEffect(() => {
    console.log("q", props.num, "\nc", props.questionnum)
    setstr(props.text)
    if (props.num === props.questionnum) {
      setstr("")
    }
  });

  return (
    <div className='textoutput'>
      <p>{props.text}</p>
      <p>{props.num}</p>
    </div>
  )

}

export default Game;
