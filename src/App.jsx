import { useState } from "react"
import questions from './data/questions'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion] // preguntas contiene a las preguntas en la posicion 0
  return (
    <>
      <h1>Trivial</h1>
      <p>{question.question}</p>
      <div>
        {
          question.answers.map(obj => <p><button>X</button>{" " + obj.txt}</p>)
        }
      </div>
    </>
  )
}

export default App
