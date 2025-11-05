function GameCard({ title, description, players, color, onClick }) {
  return (
    <div 
      className={`${color} rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white`}
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4 opacity-90">{description}</p>
      <div className="flex items-center justify-between">
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
          {players}
        </span>
        <span className="text-2xl">→</span>
      </div>
    </div>
  )
}

export default GameCard