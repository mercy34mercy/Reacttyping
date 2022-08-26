import React from 'react'

type props = {
    routerranking:any
}

const RouterRank = (props:props) => {
  return (
    <div className='box'>
    <div className='rank_link'>
        <p onClick={props.routerranking}>ランキングへ</p>
    </div>
</div>
  )
}

export default RouterRank