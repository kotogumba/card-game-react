import React, {useState} from 'react'
import hero from '../assets/hero.png'

function Hero({health}) {
  
  const hearts = '❤️'.repeat(health)

  return (
    <div className='bg-white rounded-lg border-2  border-black w-fit h-fit p-3'>
      <h1> Myron </h1>
      <p> {hearts} </p>
      <img src={hero} alt="hero" className='h-32 w-20'/>
      <p> Health {health} / {health} </p>
    </div>
  )
}

export default Hero
