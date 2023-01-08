import React from 'react'

type props = {
  sumtypingnum:number,
  answernum:number
}


const MissType = (props:props) => {
  return (
    <div className='box'>
    <p className='misstypingnum title'>
        <div className='left'>ミスタイピング</div>
        <div className='right'>{props.sumtypingnum - props.answernum}</div>
    </p>
    <p className='kana'>miss-type-count</p>
</div>
  )
}

export default MissType