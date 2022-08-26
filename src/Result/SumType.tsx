import React from 'react'

type props = {
  sumtypingnum:number
}

const SumType = (props:props) => {
  return (
    <div className='box'>
    <p className='typingnum title'>
        <div className='left'>タイピング</div>
        <div className='right'>{props.sumtypingnum}</div>
    </p>
    <p className='kana'>typing-count</p>
</div>
  )
}

export default SumType