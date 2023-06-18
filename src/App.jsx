import React ,{ useState,createContext } from "react";
import Quiz from "./Quiz";
import End from "./End";
import Start from "./Start";



export const quizContext = createContext();

function App() {
  
  const [gameState,setGameState] = useState("start")
  const [score,setScore] = useState(0)

  return (
    <div className="App">
      <header>
      <h1>wandel's Quizz</h1>
      </header>

      <quizContext.Provider
    value={{gameState,setGameState,score,setScore}}>
{gameState === "start" && <Start/> }
{gameState === "quiz" && <Quiz/> }
{gameState === "end" && <End/> }
      </quizContext.Provider>

    </div>
  )
}

export default App
