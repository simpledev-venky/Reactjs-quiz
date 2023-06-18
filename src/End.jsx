import React, { useContext } from 'react'
import { quizContext } from './App'

const End = () => {
const {score} = useContext(quizContext)

  return (
    <div className="end-div">
    <h2 className="end-screen">Quiz Ended</h2>
    <h2 className="end-screen-scr" >your score - {score} </h2>
    </div>
  )
}

export default End