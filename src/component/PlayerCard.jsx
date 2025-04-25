import React from 'react'
import diceone from '../assets/one.png'

export const PlayerCard = ({playername, score, dice}) => {
  return (
    <div className='border-2 bg-emerald-200 py-5 px-10 my-20 mx-10 rounded-xl shadow-xl'>
    <h2 className='text-center text-emerald-600 py-5 text-4xl'>{playername}</h2>
    <h4 className='text-center text-emerald-600 py-2 text-3xl'>{score}</h4>
    <img src={diceone} className='w-1/6 block mx-auto py-5' onClick={dice} />
    </div>
  )
}
