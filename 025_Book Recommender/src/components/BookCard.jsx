import React from 'react'

const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Book Cover */}
      <div className="relative mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-400 transition-all duration-300">
          <span className="text-white text-4xl font-bold opacity-80">
            {book.title.charAt(0)}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded-full">
          {book.publishedYear}
        </div>
      </div>

      {/* Book Info */}
      <div className="space-y-3">
        <h3 className="text-white font-semibold text-lg line-clamp-2 group-hover:text-purple-300 transition-colors">
          {book.title}
        </h3>
        
        <p className="text-gray-400 text-sm">by {book.author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {renderStars(book.rating)}
            <span className="text-gray-400 text-sm ml-2">{book.rating}</span>
          </div>
          <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
            {book.genre}
          </span>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2">
          {book.description}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-green-400 font-semibold">
            ${book.price}
          </span>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
            Add to List
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard