import React from 'react'

function NumberSelection({selectedNumber, setSelectedNumber, error, setError}) {
    const arrNumber = [1, 2, 3, 4, 5, 6]

    const stylebutton = {
        color: "white",
        backgroundColor: "black",
    }

    const selectedNumberHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }
    
  return (
    <div className="error-numSelector">
        <p className='error'>{error}</p>
        <div className='number-selection'>
            <p>Select Number</p>
            <div className='numbers'>
                {
                    arrNumber.map((value, i) => (
                        <button
                        key={i}
                        onClick={() => selectedNumberHandler(value)}
                        style={(value == selectedNumber) ? stylebutton : null}
                        >
                            {value}
                        </button>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default NumberSelection