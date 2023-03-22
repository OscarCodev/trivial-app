import { useState } from "react"
import questions from './data/questions'
import {Row, QuestionTxt, Box, Popup} from './styled'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [visible, setVisible] = useState(false)
  const question = questions[currentQuestion] // preguntas contiene a las preguntas en la posicion 0

  const clickedAnswer = (isRight) => {

    const isWinner = isRight && currentQuestion == questions.length - 1;
    isWinner && setVisible(true); // si isWinner es true ejecuta lo segundo

    setCurrentQuestion(isRight ?
      currentQuestion < questions.length - 1 ? currentQuestion + 1: 0:
      currentQuestion > 0 ? currentQuestion - 1: 0 
    )
  }
  
  return (
    <>
      <h1>Trivial</h1>
      
      <QuestionTxt>
      <p>{question.question}</p>
      </QuestionTxt>
      <Row>
      <img src={question.img} width="300px"/>
      
      <div>
        {question.answers.map(obj => (
            <Box>
            <p>
              <button
                onClick={()=> clickedAnswer(obj.isRight)}
              >
              X
              </button>
              {obj.txt}
            </p>
            </Box>
        ))
        }
      </div>
      </Row>

      <Popup visible={visible}>
        <div><p>Enhorabuena, has ganado Chaval</p>
        <button onClick={()=>{
          setCurrentQuestion(0);
          setVisible(false);
        }}>Volver a empezar</button>
        </div>
      </Popup>
      
    </>
  )
}

export default App
