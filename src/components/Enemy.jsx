import React, {useState} from 'react'
import enemy from '../assets/Enemy.png'

function Enemy({health, totalHealth}) {
  let hearts = ''

  if (health > 0) {
  hearts = '❤️'.repeat(health)
  } else {
    hearts = '💀'
  }


  return (
    <div className='bg-white rounded-lg border-2 border-black w-fit h-fit p-3'>
      <h1> Myron </h1>
      <p> {hearts} </p>
      <img src={enemy} alt="enemy" className='h-32 w-25'/>
      <p> Health {health} / {totalHealth} </p>
    </div>
  )
}

export default Enemy
