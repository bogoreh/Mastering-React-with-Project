import { useState, useEffect } from 'react'
import { mockBooks } from '../data/mockData'

export const useBooks = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setBooks(mockBooks)
      } catch (err) {
        setError('Failed to load books')
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return { books, loading, error }
}