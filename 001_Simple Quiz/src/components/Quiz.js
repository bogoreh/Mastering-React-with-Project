import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import { quizData } from '../data/quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (option) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: option
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return userAnswers[index] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    return (
      <Results 
        score={calculateScore()} 
        totalQuestions={quizData.length}
        onRestart={handleRestart}
      />
    );
  }

  const currentQuestionData = quizData[currentQuestion];
  const selectedOption = userAnswers[currentQuestion] || null;

  return (
    <div className="quiz-container">
      <div className="progress">
        Question {currentQuestion + 1} of {quizData.length}
      </div>
      
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={selectedOption}
        correctAnswer={currentQuestionData.correctAnswer}
        showResults={showResults}
        onOptionSelect={handleOptionSelect}
      />
      
      <div className="navigation-buttons">
        <button 
          onClick={handlePrevious} 
          disabled={currentQuestion === 0}
          className="nav-button"
        >
          Previous
        </button>
        
        <button 
          onClick={handleNext} 
          disabled={!selectedOption}
          className="nav-button next-button"
        >
          {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;