import React from 'react'
import '../../App.scss'


function StartGame({toggle}) {
  return (
    <main className='main-container'>
        <div className='container'>
            <div className='bg-img'>
                <img src='dices.png' alt="" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <button onClick={toggle}
                >Play Now</button>
            </div>
        </div>
    </main>
  )
}

export default StartGame