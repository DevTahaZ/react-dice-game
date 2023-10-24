import React from 'react'
import TotalScore from '../TotalScore/TotalScore'
import NumberSelection from '../NumberSelection/NumberSelection'
import Dice from '../Dice/Dice'
import { useState } from 'react'
import Rules from '../Rules/Rules'

function GamePlay() {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomnum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return;
    };
    const randomNumber = generateRandomnum(1, 7)
    setCurrentDice((prev) => randomNumber)

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }


  return (
    <main className='gameplay-main'>
      <div className='top-section'>
        <NumberSelection 
          selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}
        />
        <Dice 
          currentDice={currentDice} roleDice={roleDice} selectedNumber={selectedNumber}
        />
        <div className='dice-container'>
          <div className='buttons'>
            <button onClick={resetScore} className='first'>Reset Score</button>
            <button className='second'
              onClick={() => setShowRules((prev) => !prev)}
            >{
              showRules ? "Hide" : "Show"
            } Rules</button>
            {showRules && <Rules/>}
          </div>  
        </div>
        <TotalScore score={score}/>
      </div>
      
      
    </main>
  )
}

export default GamePlay