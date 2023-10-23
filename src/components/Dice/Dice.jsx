import React from 'react'
import dice1 from '/src/assets/dice/dice_1.png'
import dice2 from '/src/assets/dice/dice_2.png'
import dice3 from '/src/assets/dice/dice_3.png'
import dice4 from '/src/assets/dice/dice_4.png'
import dice5 from '/src/assets/dice/dice_5.png'
import dice6 from '/src/assets/dice/dice_6.png'

function Dice({currentDice, roleDice}) {

  const diceArr = [
    {
      1: dice1,
      2: dice2,
      3: dice3,
      4: dice4,
      5: dice5,
      6: dice6,
    }
  ]


  return (
    <main className='dice-container'>
      <div className='img-container'>
        <div className='dice' onClick={roleDice}>
          {/* <img src={`/src/assets/dice/dice_${currentDice}.png`} alt="" /> */}
          <img src={diceArr[0][currentDice]} alt="" />
        </div>
        <p>Click on Dice to roll</p>
      </div>
    </main>
  )
}

export default Dice