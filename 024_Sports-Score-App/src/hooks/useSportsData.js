import { useState, useEffect } from 'react'
import { mockGames } from '../data/mockData'

export const useSportsData = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setGames(mockGames)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return { games, loading }
}