import { useState } from 'react'

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correct: 1
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correct: 2
  }
]

function TriviaQuiz({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    
    if (answerIndex === triviaQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < triviaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  if (showResult) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
        <div className="text-2xl font-semibold text-gray-700 mb-4">
          Your Score: {score} / {triviaQuestions.length}
        </div>
        <div className="text-4xl mb-6">
          {score === triviaQuestions.length ? '🏆 Perfect!' : 
           score >= triviaQuestions.length / 2 ? '🎉 Great Job!' : '👍 Good Try!'}
        </div>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={onBack}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Games
          </button>
          <button 
            onClick={resetQuiz}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }

  const question = triviaQuestions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Trivia Quiz</h2>
        <div className="text-lg font-semibold text-gray-700">
          {currentQuestion + 1} / {triviaQuestions.length}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-xl font-semibold text-gray-800 mb-4">
          {question.question}
        </div>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg transition-all "
            
            if (selectedAnswer !== null) {
              if (index === question.correct) {
                buttonClass += "bg-green-500 text-white"
              } else if (index === selectedAnswer && index !== question.correct) {
                buttonClass += "bg-red-500 text-white"
              } else {
                buttonClass += "bg-gray-200 text-gray-700"
              }
            } else {
              buttonClass += "bg-purple-100 hover:bg-purple-200 text-gray-800 hover:scale-105"
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={buttonClass}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-center text-lg font-semibold text-gray-700">
        Score: {score}
      </div>
    </div>
  )
}

export default TriviaQuiz