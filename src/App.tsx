import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoman } from './keyexchange';
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
    ["出雲橋西詰","いずもばしにしづめ"],
    ["今宮門前","いまみやもんまえ"],
    ["上賀茂橋西詰","かみがもばしにしづめ"],
    ["烏丸紫明","からすましめい"],
    ["北大路大宮","きたおおじおおみや"],
    ["北大路新町","きたおおじしんまち"],
    ["北野白梅町","きたのはくばいちょう"],
    ["木辻馬代","きつじばだい"],
    ["衣笠北天神森町","きぬがさきたてんじんもりちょう"],
    ["建勲神社前","けんくんじんじゃまえ"],
    ["大将軍","たいしょうぐん"],
    ["馬代一条","ばだいいちじょう"],
    ["堀川今宮","ほりかわいまみや"],
    ["堀川玄以","ほりかわげんい"],
    ["御薗橋通大宮","みそのばしどおりおおみや"],
    ["御薗橋通船岡東","みそのばしどおりふなおかひがし"],
    ["川端東一条","かわばたひがしいちじょう"],
    ["白川通北大路","しらかわどおりきたおおじ"],
    ["白川通北山","しらかわどおりきたやま"],
    ["東山近衛","ひがしやまこのえ"],
    ["東山東一条","ひがしやまいちじょう"],
    ["東山丸太町","ひがしやままるたまち"],
    ["今出川新町","いまでがわしんまち"],
    ["今出川智恵光院","いまでがわちえこういん"],
    ["烏丸下立売","からすましもだちうり"],
    ["烏丸下長者町","からすましもちょうじゃまち"],
    ["烏丸中立売","からすまなかだちうり"],
    ["千本鞍馬口","せんぼんくらまぐち"],
    ["千本寺之内","せんぼんてらのうち"],
    ["堀川寺之内","ほりかわてらのうち"],
    ["堀川中立売","ほりかわなかだちうり"],
    ["丸太町智恵光院","まるたまちちえこういん"],
    ["油小路東寺道","あぶらのこうじとうじみち"],
    ["大宮東寺道","おおみやとうじみち"],
    ["大宮八条","おおみやはちじょう"],
    ["葛野大路九条","かどのおおじくじょう"],
    ["葛野大路八条","かどのおおじはちじょう"],
    ["烏丸針小路","からすまはりこうじ"],
    ["烏丸札ノ辻",""],
    ["河原町十条","かわらまちじゅうじょう"],
    ["吉祥院西ノ茶屋","きっしょういんにしのちゃや"],
    ["九条油小路","くじょうあぶらのこうじ"],
    ["九条七本松","くじょうしちほんまつ"],
    ["九条旧千本","くじょうきゅうせんぼん"],
    ["九条新千本","くじょうしんせんぼん"],
    ["九条新町","くじょうしんまち"],
    ["九条西洞院","くじょうにしのとういん"],
    ["久世橋烏丸","くぜばしからすま"],
    ["十条油小路","じゅうじょうあぶらのこうじ"],
    ["十条大宮","じゅうじょうおおみや"],
    ["十条烏丸","じゅうじょうからすま"],
    ["十条旧千本","じゅうじょうきゅうせんぼん"],
    ["十条新千本","じゅうじょうしんせんぼん"],
    ["十条新町","じゅうじょうしんまち"],
    ["竹田街道十条","たけだかいどうじゅうじょう"],
    ["竹田街道八条","たけだかいどうはちじょう"],
    ["西大路九条","にしおおじくじょう"],
    ["西大路十条","にしおおじじゅうじょう"],
    ["五条春日","ごじょうかすが"],
    ["天神川御池","てんじんがわおいけ"],
    ["烏丸丸太町", "からすままるたまち"],
    ["烏丸北大路", "からすまきたおおじ"],
    ["烏丸鞍馬口", "からすまくらまぐち"],
    ["烏丸今出川", "からすまいまでがわ"],
    ["烏丸五条", "からすまごじょう"],
    ["烏丸七条", "からすましちじょう"],
    ["堀川北大路", "ほりかわきたおおじ"],
    ["北大路下鴨本通", "きたおおじしもがもほんどおり"],
    ["千本丸太町", "せんぼんまるたまち"],
    ["千本北大路", "せんぼんきたおおじ"],
    ["四条大宮", "しじょうおおみや"],
    ["東山三条", "ひがしやまさんじょう"],
    ["四条室町", "しじょうむろまち"],
    ["寺町五条", "てらまちごじょう"],
    ["千本御池", "せんぼんおいけ"],
    ["千本松原", "せんぼんまつばら"],
    ["千本五条", "せんぼんごじょう"],
    ["四条河原町", "しじょうかわらまち"],
    ["葛野大路五条", "かどのおおじごじょう"],
    ["川端御池", "かわばたおいけ"],
    ["川端二条", "かわばたにじょう"],
    ["北白川別当", "きたしらかわべっとう"],
    ["荒神橋東詰", "こうじんばしひがしづめ"],
    ["下鴨本通北大路", "しもがもほんどおりきたおおじ"],
    ["百万遍", "ひゃくまんべん"],
    ["大宮木津屋橋", "おおみやきづやばし"],
    ["大宮七条", "おおみやしちじょう"],
    ["烏丸御池", "からすまおいけ"],
    ["河原町御池", "かわらまちおいけ"],
    ["河原町八条", "かわらまちはちじょう"],
    ["五条七本松", "ごじょうしちほんまつ"],
    ["五条御前", "ごじょうおんまえ"],
    ["四条河原町", "しじょうかわらまち"],
    ["四条西洞院", "しじょうにしのとういん"],
    ["四条堀川", "しじょうほりかわ"],
    ["七条壬生", "しちじょうみぶ"],
    ["堀川高辻", "ほりかわたかつじ"],
    ["西大路花屋町", "にしおおじはなやまち"],
    ["油小路東寺道","あぶらのこうじとうじみち"],
    ["河原町十条","かわらまちじゅうじょう"],
    ["九条油小路","くじょうあぶらのこうじ"],
    ["九条大宮","くじょうおおみや"],
    ["九条新町","くじょうしんまち"],
    ["十条烏丸","じゅうじょうからすま"],
    ["中山稲荷","なかやまいなり"],
    ["西大路九条","にしおおじくじょう"],
    ["八条壬生","はちじょうみぶ"]
    
  ]

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const [misstype,setmisstype] = React.useState(0)
  const [counter, setCounter] = React.useState(0);
  const [questioncounter, setQuestioncounter] = React.useState(0);
  const [questionnumber, setQuestionnumber] = React.useState(getRandomInt(questions2.length));
  const [answerstring, setAnswer] = React.useState("");
  const [cssstyle, setCssStyle] = React.useState("");

  const [questionstring,setstring] = React.useState([""])
  const questionlength: number = questionstring.length;

  const convert = (str:string) => {
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
    let flag:boolean = false
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

    if(flag){
    sound()
    questionstring.forEach(ele =>{
      if(ele[counter] == value){
        console.log("正解",ele[counter])
      }
      else{
        console.log("ele[counter]",ele[counter])
        newquestion = newquestion.filter(item=> item !== ele);
        console.log(questionstring)
      }
    })
    props.updateInputString("")
    setstring(newquestion)
    props.updateanswerTypeStringlen(props.answerStringnum + 1)
    setAnswer(answerstring + value)
    setCounter(counter + 1)
  }
    // props.updatetypeStringlen(props.typeStringnum + 1)
  }


  useEffect(() => {
    console.log(props.starttime)
    if (questioncounter >=11) {
      const endTime = Date.now()
      console.log(endTime);
      const time: number = endTime - props.starttime
      navigate("/result", { state: { answernum: props.answerStringnum, time: time,misstyping:misstype } })
    }

    judgement(props.answerString)
    for(let i = 0;i < questionstring.length;i++){
      if (questionstring[i].length === counter) {
        const rand = getRandomInt(questions2.length)
        setQuestionnumber(rand)
        setQuestioncounter(questioncounter+1)
        setAnswer("")
        setCounter(0)
      }
    }
  })

  useEffect(() => {
    convert(questions2[questionnumber][1])
  },[questionnumber])


  const sound = () => {
    const audio = new Audio('./Buttons.mp3')
    audio.play()
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
  } else if (props.valuekey == props.answernum + 1) {
    return (
      <a className='underbar'>
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
