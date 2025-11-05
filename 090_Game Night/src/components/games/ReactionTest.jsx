import { useState, useEffect, useRef } from 'react'

function ReactionTest({ onBack }) {
  const [gameState, setGameState] = useState('waiting') // waiting, ready, recording, result
  const [startTime, setStartTime] = useState(0)
  const [reactionTime, setReactionTime] = useState(0)
  const [bestTime, setBestTime] = useState(null)
  const timeoutRef = useRef(null)

  const startGame = () => {
    setGameState('waiting')
    
    const waitTime = Math.random() * 3000 + 1000 // 1-4 seconds
    
    timeoutRef.current = setTimeout(() => {
      setGameState('ready')
      setStartTime(Date.now())
    }, waitTime)
  }

  const handleClick = () => {
    if (gameState === 'waiting') {
      clearTimeout(timeoutRef.current)
      setGameState('tooSoon')
      return
    }

    if (gameState === 'ready') {
      const endTime = Date.now()
      const time = endTime - startTime
      setReactionTime(time)
      setGameState('result')
      
      if (!bestTime || time < bestTime) {
        setBestTime(time)
      }
    }

    if (gameState === 'tooSoon' || gameState === 'result') {
      startGame()
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const getButtonContent = () => {
    switch (gameState) {
      case 'waiting':
        return 'Wait for green...'
      case 'ready':
        return 'CLICK NOW!'
      case 'tooSoon':
        return 'Too Soon! Click to try again'
      case 'result':
        return `Click to play again`
      default:
        return 'Click to start'
    }
  }

  const getButtonClass = () => {
    let baseClass = "w-64 h-64 rounded-full text-white text-xl font-bold transition-all duration-300 "
    
    switch (gameState) {
      case 'waiting':
        return baseClass + "bg-red-500 hover:bg-red-600"
      case 'ready':
        return baseClass + "bg-green-500 animate-pulse scale-110"
      case 'tooSoon':
        return baseClass + "bg-yellow-500 hover:bg-yellow-600"
      case 'result':
        return baseClass + "bg-blue-500 hover:bg-blue-600"
      default:
        return baseClass + "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Reaction Test</h2>
        <div className="w-20"></div>
      </div>

      <div className="mb-8">
        <div className="text-lg text-gray-600 mb-2">
          Click when the circle turns green!
        </div>
        
        <button
          onClick={handleClick}
          className={getButtonClass()}
        >
          {getButtonContent()}
        </button>
      </div>

      {gameState === 'result' && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-700 mb-2">
            Reaction Time: {reactionTime}ms
          </div>
          {bestTime && (
            <div className="text-lg text-blue-600">
              Best Time: {bestTime}ms
            </div>
          )}
        </div>
      )}

      {gameState === 'tooSoon' && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
          <div className="text-xl font-bold text-yellow-700">
            Wait for the green color before clicking!
          </div>
        </div>
      )}

      <div className="text-sm text-gray-500">
        {bestTime && `Personal Best: ${bestTime}ms`}
      </div>
    </div>
  )
}

export default ReactionTest