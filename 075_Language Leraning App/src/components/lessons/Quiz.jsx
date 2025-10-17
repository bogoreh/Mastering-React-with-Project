import React, { useState } from 'react'
import Button from '../common/Button'

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <div className="quiz-result">
        <h2>Quiz Complete! 🎉</h2>
        <p>Your score: {score}/{questions.length}</p>
        <div className="quiz-actions">
          <Button onClick={resetQuiz}>Try Again</Button>
          <Button variant="primary" onClick={() => onComplete(score)}>
            Continue
          </Button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="quiz">
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      <h3 className="quiz-question">{question.question}</h3>
      
      <div className="quiz-options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </div>
        ))}
      </div>
      
      <div className="quiz-actions">
        <Button 
          onClick={handleAnswer}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Quiz