import React from 'react'
import { useState } from 'react'

function Dice({currentDice, roleDice, selectedNumber}) {
  const [shake, setShake] = useState(false)

  const animate = () => {
    if(selectedNumber) {
      setShake(true)
      setTimeout(() => {setShake(false)}, 500);
    } 
    return null
  }

  return (
    <main className='dice-container'>
      <div className='img-container'>
        <div className='dice' onClick={roleDice}>
          <div onClick={animate} className={shake ? 'dice-shake' : null} >{currentDice}</div>
        </div>
        <p>Click on Dice to roll</p>
      </div>
    </main>
  )
}

export default Dice