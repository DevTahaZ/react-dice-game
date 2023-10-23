import React from 'react'
import "./App.scss"
import { useState } from 'react'
import StartGame from './components/StartGame/StartGame'
import GamePlay from './components/GamePlay/GamePlay'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
