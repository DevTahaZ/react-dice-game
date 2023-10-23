import React from 'react'

function Dice({currentDice, roleDice}) {

  return (
    <main className='dice-container'>
      <div className='img-container'>
        <div className='dice' onClick={roleDice}>
          <img src={`/src/assets/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
      </div>
    </main>
  )
}

export default Dice