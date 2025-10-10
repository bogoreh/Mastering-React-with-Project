import '../styles/App.css';

function ScoreBoard({ score, totalQuestions, currentQuestion }) {
  return (
    <div className="score-board">
      <div className="score-info">
        <h2>Score: {score}/{totalQuestions}</h2>
        <p>Question: {currentQuestion}/{totalQuestions}</p>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScoreBoard;