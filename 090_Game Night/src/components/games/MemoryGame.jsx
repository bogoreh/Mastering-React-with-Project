import { useState, useEffect } from 'react'

const cardsData = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

function MemoryGame({ onBack }) {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const gameCards = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map((emoji, id) => ({ id, emoji }))
    
    setCards(gameCards)
    setFlipped([])
    setSolved([])
    setMoves(0)
  }

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) return
    
    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)
    
    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      
      if (cards[first].emoji === cards[second].emoji) {
        setSolved([...solved, first, second])
      }
      
      setTimeout(() => setFlipped([]), 1000)
    }
  }

  const isGameComplete = solved.length === cards.length && cards.length > 0

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Memory Game</h2>
        <button 
          onClick={initializeGame}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          New Game
        </button>
      </div>

      <div className="text-center mb-6">
        <div className="text-xl font-semibold text-gray-700">
          Moves: {moves} | Found: {solved.length / 2} / {cardsData.length}
        </div>
        {isGameComplete && (
          <div className="text-2xl font-bold text-green-600 mt-2">
            Congratulations! You won in {moves} moves! 🎉
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id) || solved.includes(card.id)
          
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`w-20 h-20 text-3xl font-bold rounded-lg transition-all duration-300
                ${isFlipped 
                  ? 'bg-white border-2 border-green-500 transform rotate-0' 
                  : 'bg-green-500 text-white hover:bg-green-600'
                }
                active:scale-95`}
            >
              {isFlipped ? card.emoji : '?'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MemoryGame