import { useState } from 'react'
import { API_URL } from '../utils/constants'

const useBooks = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchBooks = async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(query)}&maxResults=20&printType=books`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      
      const data = await response.json()
      setBooks(data.items || [])
    } catch (err) {
      setError(err.message || 'An error occurred while searching for books')
      setBooks([])
    } finally {
      setLoading(false)
    }
  }

  return {
    books,
    loading,
    error,
    searchBooks
  }
}

export default useBooks