import { useState, useEffect } from 'react'
import { MOCK_FLIGHTS } from '../utils/constants'

export const useFlights = (searchParams) => {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFlights = async () => {
      if (!searchParams.flightNumber) {
        setFlights([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Filter mock data based on search parameters
        const filteredFlights = MOCK_FLIGHTS.filter(flight => {
          const matchesFlightNumber = flight.flightNumber
            .toLowerCase()
            .includes(searchParams.flightNumber.toLowerCase())
          
          const matchesAirline = !searchParams.airline || 
            flight.airline.code === searchParams.airline

          return matchesFlightNumber && matchesAirline
        })

        setFlights(filteredFlights)
      } catch (err) {
        setError('Failed to fetch flight data. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchFlights()
  }, [searchParams])

  return { flights, loading, error }
}