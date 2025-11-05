import { useState } from 'react'
import Header from './components/Header'
import GameCard from './components/GameCard'
import TicTacToe from './components/games/TicTacToe'
import MemoryGame from './components/games/MemoryGame'
import TriviaQuiz from './components/games/TriviaQuiz'
import ReactionTest from './components/games/ReactionTest'
import './styles/index.css'

function App() {
  const [currentGame, setCurrentGame] = useState(null)

  const games = [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      description: 'Classic 2-player strategy game',
      players: '2 Players',
      color: 'bg-blue-500'
    },
    {
      id: 'memory',
      title: 'Memory Game',
      description: 'Test your memory with matching cards',
      players: '1-4 Players',
      color: 'bg-green-500'
    },
    {
      id: 'trivia',
      title: 'Trivia Quiz',
      description: 'Challenge your knowledge',
      players: '1+ Players',
      color: 'bg-purple-500'
    },
    {
      id: 'reaction',
      title: 'Reaction Test',
      description: 'Test your reflexes',
      players: '1 Player',
      color: 'bg-red-500'
    }
  ]

  const renderGame = () => {
    switch (currentGame) {
      case 'tictactoe':
        return <TicTacToe onBack={() => setCurrentGame(null)} />
      case 'memory':
        return <MemoryGame onBack={() => setCurrentGame(null)} />
      case 'trivia':
        return <TriviaQuiz onBack={() => setCurrentGame(null)} />
      case 'reaction':
        return <ReactionTest onBack={() => setCurrentGame(null)} />
      default:
        return (
          <div className="games-grid">
            {games.map(game => (
              <GameCard
                key={game.id}
                {...game}
                onClick={() => setCurrentGame(game.id)}
              />
            ))}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderGame()}
      </main>
    </div>
  )
}

export default App