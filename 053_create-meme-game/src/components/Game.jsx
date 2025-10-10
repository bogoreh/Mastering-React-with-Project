import { useState, useEffect } from 'react';
import { memeData } from '../data/memes';
import MemeCard from './MemeCard';
import ScoreBoard from './ScoreBoard';
import '../styles/App.css';

function Game() {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledMemes, setShuffledMemes] = useState([]);

  // Shuffle memes on component mount
  useEffect(() => {
    const shuffled = [...memeData].sort(() => Math.random() - 0.5);
    setShuffledMemes(shuffled);
  }, []);

  const currentMeme = shuffledMemes[currentMemeIndex];

  const handleAnswer = (selectedAnswer) => {
    if (showResult) return;

    setShowResult(true);
    
    if (selectedAnswer === currentMeme.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentMemeIndex < shuffledMemes.length - 1) {
      setCurrentMemeIndex(currentMemeIndex + 1);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    const shuffled = [...memeData].sort(() => Math.random() - 0.5);
    setShuffledMemes(shuffled);
    setCurrentMemeIndex(0);
    setScore(0);
    setShowResult(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="game-container">
        <div className="game-over">
          <h1>🎮 Game Over! 🎮</h1>
          <h2>Final Score: {score}/{shuffledMemes.length}</h2>
          <p>
            {score === shuffledMemes.length ? "Perfect! You're a meme master! 🏆" :
             score >= shuffledMemes.length / 2 ? "Great job! You know your memes! 👍" :
             "Keep practicing! You'll get better! 💪"}
          </p>
          <button onClick={restartGame} className="restart-button">
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (!currentMeme) {
    return <div className="loading">Loading memes...</div>;
  }

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>🎭 Guess The Meme 🎭</h1>
        <p>Can you identify these popular memes?</p>
      </header>

      <ScoreBoard 
        score={score}
        totalQuestions={shuffledMemes.length}
        currentQuestion={currentMemeIndex + 1}
      />

      <MemeCard 
        meme={currentMeme}
        onAnswer={handleAnswer}
        showResult={showResult}
      />

      {showResult && (
        <div className="next-button-container">
          <button onClick={nextQuestion} className="next-button">
            {currentMemeIndex < shuffledMemes.length - 1 ? 'Next Meme' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;