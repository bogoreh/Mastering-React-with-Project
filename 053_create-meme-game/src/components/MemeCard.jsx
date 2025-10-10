import '../styles/App.css';

function MemeCard({ meme, onAnswer, showResult }) {
  return (
    <div className="meme-card">
      <div className="meme-image-container">
        <img 
          src={meme.imageUrl} 
          alt="Meme" 
          className="meme-image"
        />
      </div>
      
      <div className="options-container">
        {meme.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={showResult}
            className={`option-button ${
              showResult && option === meme.correctAnswer ? 'correct' : ''
            } ${
              showResult && option !== meme.correctAnswer ? 'wrong' : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="result-section">
          <p className="correct-answer">
            Correct! This is: <strong>{meme.correctAnswer}</strong>
          </p>
          <p className="source-info">
            Source: {meme.source}
          </p>
        </div>
      )}
    </div>
  );
}

export default MemeCard;