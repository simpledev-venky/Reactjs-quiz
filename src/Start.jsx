import React,{useContext} from 'react'
import { quizContext } from './App'

const Start = () => {
 const {setGameState} = useContext(quizContext)

  return (
    <div>
        <button onClick={()=>setGameState("quiz")} className= "start">Start Quizz</button>
    </div>
  )
}

export default Start