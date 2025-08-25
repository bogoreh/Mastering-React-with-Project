import React from 'react';

const Results = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="results-container">
      <h2>Quiz Completed!</h2>
      <div className="score-section">
        <p>Your score: {score} out of {totalQuestions}</p>
        <p>Percentage: {Math.round((score / totalQuestions) * 100)}%</p>
      </div>
      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;