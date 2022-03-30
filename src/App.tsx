import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


type counter = {
  count: number
}

const Game = () => {
  return (
    <Inputbar></Inputbar>
  )
}

const Inputbar = () => {
  const question: string[] = ["watnow", "gutti"]
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [answerstring,setAnswer] = React.useState("")
  const questionlength:number = question[questioncounter].length

  const handlechenge = (event:any) => {
    setInputValue(event.target.value);
    judgement(event.target.value)
  };

  const judgement = (value: string) => {
    

    const len = value.length

    if (question[questioncounter][counter] === value[len - 1]) {
      setCounter(counter + 1)
      setAnswer(answerstring + value[len - 1])
      console.log("正解")
    }

    console.log("q", question[questioncounter].length,"\nc",counter)
    if (question[questioncounter].length === counter) {
      setCounter(0)
      setQuestioncounter(questioncounter + 1)
      setAnswer("")
      console.log("reset")
    }
  }




  return (
    <div className='inputbar'>
      <input value={inputValue} onChange={handlechenge}></input>  
      <Textoutput text={answerstring} num={counter} questionnum={questionlength}></Textoutput>
    </div>
  )
}


type Props = {
  text: string
  num: number
  questionnum:number
}

const Textoutput = (props: Props) => {
  const [str, setstr] = React.useState("")
  
  useEffect(() => {
    setstr(props.text)
    if (props.num === props.questionnum) {
      setstr("")
    }
  });

  return (
    <div className='textoutput'>
      <p>{str}</p>
      <p>{props.num}</p>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Game;
