import React, { useState } from 'react';
import QuizCard from './components/QuizCard';
import ProgressBar from './components/ProgressBar';
import Result from './components/Result';
import { quizData } from './data/quizData';
import './styles/App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuizData = quizData[currentQuestion - 1];
  const selectedAnswer = userAnswers[currentQuestion] || '';

  const handleAnswerSelect = (answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    return quizData.reduce((score, question) => {
      return userAnswers[question.id] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  const handleRestart = () => {
    setCurrentQuestion(1);
    setUserAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Result 
        score={calculateScore()}
        totalQuestions={quizData.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="app">
      <div className="quiz-container">
        <header className="quiz-header">
          <h1>Quick Quiz</h1>
          <p>Test your knowledge with these questions</p>
        </header>

        <ProgressBar 
          current={currentQuestion}
          total={quizData.length}
        />

        <QuizCard
          question={currentQuizData.question}
          options={currentQuizData.options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
          showNextButton={true}
        />
      </div>
    </div>
  );
}

export default App;