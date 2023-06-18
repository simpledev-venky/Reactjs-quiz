import React, { useContext, useState } from "react";
import data from "./data";
import { quizContext } from "./App";

const Quiz = () => {
  const [currQues, setCurrQues] = useState(0);
const {gameState,setGameState,score,setScore} = useContext(quizContext)

const nextQues = ()=>{
setCurrQues(currQues + 1)
}

const endQuiz = ()=>{
setGameState("end")
}
 const handleChange = (e)=>{
 if (data[currQues].answer === e.target.value){
setScore(score + 1)
}
}
  return (
    <div className="quiz-div">
      <h1 className="ques">{data[currQues].ques}</h1>
    
     <select className="options" onChange={handleChange}>
        <option value="">SELECT</option>
        <option value="a">{data[currQues].a}</option>
        <option value="b">{data[currQues].b}</option>
        <option value="c">{data[currQues].c}</option>
        <option value="d">{data[currQues].d}</option>
     </select>
<br />
    {
    currQues === data.length-1 ? (
        <button onClick={endQuiz} className="next" >Finish Quiz</button>
        ) : (
      <button onClick={nextQues} className="next">Next Question</button>
            )
    }
    </div>
  );
};

export default Quiz;
