import React from 'react'
import Question from "./Qestions"
import data from "./data"

const App = () => {
  // eslint-disable-next-line
  const [questions, setQuestions] = React.useState(data)
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__info">
          <div>
            <h1>Questions and <br /> answers about <br /> login </h1>
          </div>

          <div className="info">
            {
              questions.map(question => {
                return (
                  <Question key={question.id} {...question} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App