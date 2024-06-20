import React from 'react'
import './QuizResult.css'

function QuizResult({score, totalScore, resetAll}) {

  return (
    <div className='QuizResult'>

        <div className='title'>Your Score : <span>{score}</span></div>
        <div className='title'>Total Score : {totalScore}</div>

        <button
        className='try-again'
        onClick={resetAll}
        >Try Again</button>
    </div>
  )
}

export default QuizResult
