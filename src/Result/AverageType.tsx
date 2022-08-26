import React from 'react'

type props = {
  average:number
}

const AverageType = (props:props) => {
  return (
    <div className='box'>
      <p className='avaragenum title'>
        <div className='left'>へいきんキータイプ</div>
        <div className='right'>{Math.round(props.average * 10) / 10}</div>
      </p>
      <p className='kana'>keytype-avarage</p>
    </div>
  )
}

export default AverageType