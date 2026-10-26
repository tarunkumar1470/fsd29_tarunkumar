import React,{useState} from 'react';
import questions from './questions.json';
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const[score,setScore]=useState(0);
const checkAnswer=(option)=>{
  if (option === questions[currentIndex].correctAnswer) {
    setScore(score + 1);
  }
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
  }
};
return(
  <div>
    <h1>Quiz App</h1>
    <p>Question {currentIndex + 1} of {questions.length}</p>
    <h2>{questions[currentIndex].question}</h2>
    <div className='OPTIONS'>
      {questions[currentIndex].options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
    3
  </div>
)