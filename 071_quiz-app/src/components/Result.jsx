import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad! 😊";
    return "Keep practicing! 📚";
  };

  return (
    <div className="result-container">
      <div className="result-card">
        <h2>Quiz Completed!</h2>
        
        <div className="score-circle">
          <div className="score-text">
            <span className="score-number">{score}</span>
            <span className="score-total">/{totalQuestions}</span>
          </div>
          <div className="score-percentage">{percentage}%</div>
        </div>
        
        <h3 className="result-message">{getResultMessage()}</h3>
        
        <button className="restart-btn" onClick={onRestart}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;