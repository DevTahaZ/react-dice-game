import React from 'react'

function TotalScore({score}) {
  return (
    <>
        <div className="total-score">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
    </>
  )
}

export default TotalScore