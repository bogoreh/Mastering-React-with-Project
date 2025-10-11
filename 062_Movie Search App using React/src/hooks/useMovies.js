import { useState } from 'react'

const API_KEY = '90dc5a62' // Get from https://www.omdbapi.com/
const BASE_URL = 'https://www.omdbapi.com/'

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchMovies = async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
      )
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search || [])
      } else {
        setMovies([])
        setError(data.Error || 'No movies found')
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.')
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return { movies, loading, error, searchMovies }
}

export default useMovies