import React, { useState, useEffect } from 'react';
import './VideoGame.css';

const VideoGameUI = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isFiring, setIsFiring] = useState(false);
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      // Generate random enemies
      if (Math.random() < 0.3) {
        setEnemies(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 300,
          type: Math.random() > 0.7 ? 'boss' : 'normal'
        }]);
      }

      // Update enemies position
      setEnemies(prev => prev.map(enemy => ({
        ...enemy,
        x: enemy.x + 2
      })).filter(enemy => enemy.x < 400));
    }, 100);

    return () => clearInterval(gameLoop);
  }, []);

  const takeDamage = () => {
    setPlayerHealth(prev => Math.max(0, prev - 10));
  };

  const fireWeapon = () => {
    if (!isFiring) {
      setIsFiring(true);
      setEnemies(prev => {
        const newEnemies = [...prev];
        if (newEnemies.length > 0) {
          newEnemies.pop();
          setScore(prev => prev + 100);
        }
        return newEnemies;
      });
      
      setTimeout(() => setIsFiring(false), 200);
    }
  };

  const heal = () => {
    setPlayerHealth(prev => Math.min(100, prev + 25));
  };

  return (
    <div className="video-game">
      <div className="game-stats">
        <div className="health-bar">
          <span>HP: {playerHealth}%</span>
          <div className="health-fill" style={{ width: `${playerHealth}%` }}></div>
        </div>
        <div className="score">Score: {score}</div>
        <div className="level">Level: {level}</div>
      </div>

      <div className="game-area">
        <div className="player-ship" onClick={fireWeapon}>
          {isFiring && <div className="laser-beam"></div>}
          🚀
        </div>
        
        {enemies.map(enemy => (
          <div 
            key={enemy.id}
            className={`enemy ${enemy.type}`}
            style={{ left: `${enemy.x}px` }}
            onClick={takeDamage}
          >
            {enemy.type === 'boss' ? '👾' : '👽'}
          </div>
        ))}
      </div>

      <div className="game-controls">
        <button onClick={fireWeapon} className="btn-fire">
          🔥 FIRE
        </button>
        <button onClick={heal} className="btn-heal">
          ❤️ HEAL
        </button>
        <button onClick={() => setLevel(prev => prev + 1)} className="btn-level">
          ⬆️ LEVEL UP
        </button>
      </div>
    </div>
  );
};

export default VideoGameUI;