import { useState } from 'react'

function TicTacToe({ onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return
    
    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every(square => square !== null)

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Tic Tac Toe</h2>
        <button 
          onClick={resetGame}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="text-center mb-6">
        {winner ? (
          <div className="text-2xl font-bold text-green-600">
            Player {winner} Wins! 🎉
          </div>
        ) : isDraw ? (
          <div className="text-2xl font-bold text-yellow-600">
            It's a Draw! 🤝
          </div>
        ) : (
          <div className="text-2xl font-bold text-gray-700">
            Next Player: <span className={isXNext ? 'text-blue-500' : 'text-red-500'}>
              {isXNext ? 'X' : 'O'}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 text-3xl font-bold border-2 border-gray-300 rounded-lg transition-all
              ${square === 'X' ? 'text-blue-500 bg-blue-50' : ''}
              ${square === 'O' ? 'text-red-500 bg-red-50' : ''}
              hover:bg-gray-100 active:scale-95`}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe