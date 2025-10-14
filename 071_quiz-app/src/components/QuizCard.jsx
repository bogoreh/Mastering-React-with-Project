import React from 'react';

const QuizCard = ({ 
  question, 
  options, 
  selectedAnswer, 
  onAnswerSelect, 
  onNext, 
  onPrevious,
  currentQuestion,
  totalQuestions,
  showNextButton 
}) => {
  return (
    <div className="quiz-card">
      <h2 className="question">{question}</h2>
      
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      <div className="navigation-buttons">
        <button 
          className="nav-btn prev-btn"
          onClick={onPrevious}
          disabled={currentQuestion === 1}
        >
          Previous
        </button>
        
        {showNextButton && (
          <button 
            className="nav-btn next-btn"
            onClick={onNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === totalQuestions ? 'Finish Quiz' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;