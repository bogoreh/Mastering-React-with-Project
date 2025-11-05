import { useState } from 'react'

const quizQuestions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript framework",
      "A JavaScript library for building user interfaces", 
      "A programming language",
      "A database"
    ],
    correct: 1,
    explanation: "React is a JavaScript library for building user interfaces, particularly web applications."
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A new programming language",
      "A CSS framework", 
      "A database query language"
    ],
    correct: 0,
    explanation: "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React."
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A real DOM element",
      "A programming concept where UI is kept in memory",
      "A type of database",
      "A CSS property"
    ],
    correct: 1,
    explanation: "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory."
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerClick = (optionIndex) => {
    setSelectedAnswer(optionIndex)
    setShowExplanation(true)
    
    if (optionIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setShowScore(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  return (
    <div className="app">
      <h1>React Quiz</h1>
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <h2>Quiz Completed! 🎉</h2>
            <p className="score">You scored {score} out of {quizQuestions.length}</p>
            <p className="percentage">
              {Math.round((score / quizQuestions.length) * 100)}%
            </p>
            <button onClick={restartQuiz} className="restart-btn">
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="progress">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
            <div className="question-section">
              <h2>{quizQuestions[currentQuestion].question}</h2>
            </div>
            <div className="answer-section">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`
                    answer-btn 
                    ${selectedAnswer === index 
                      ? index === quizQuestions[currentQuestion].correct 
                        ? 'correct' 
                        : 'incorrect'
                      : ''
                    }
                    ${selectedAnswer !== null && index === quizQuestions[currentQuestion].correct ? 'correct' : ''}
                  `}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanation && (
              <div className="explanation">
                <p>{quizQuestions[currentQuestion].explanation}</p>
                <button onClick={nextQuestion} className="next-btn">
                  {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App