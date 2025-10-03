export const AIRLINES = [
  { code: 'AA', name: 'American Airlines', logo: '✈️' },
  { code: 'DL', name: 'Delta Air Lines', logo: '✈️' },
  { code: 'UA', name: 'United Airlines', logo: '✈️' },
  { code: 'LH', name: 'Lufthansa', logo: '✈️' },
  { code: 'BA', name: 'British Airways', logo: '✈️' },
  { code: 'AF', name: 'Air France', logo: '✈️' },
  { code: 'EK', name: 'Emirates', logo: '✈️' },
]

export const MOCK_FLIGHTS = [
  {
    flightNumber: 'AA123',
    airline: { code: 'AA', name: 'American Airlines', logo: '✈️' },
    departure: {
      iata: 'JFK',
      airport: 'John F. Kennedy International',
      scheduled: '2024-01-15T08:00:00Z',
      terminal: '4',
      gate: 'B12'
    },
    arrival: {
      iata: 'LAX',
      airport: 'Los Angeles International',
      scheduled: '2024-01-15T11:00:00Z',
      terminal: '5',
      gate: '52'
    },
    status: 'scheduled',
    duration: '6h 00m',
    aircraft: 'Boeing 777'
  },
  {
    flightNumber: 'DL456',
    airline: { code: 'DL', name: 'Delta Air Lines', logo: '✈️' },
    departure: {
      iata: 'ATL',
      airport: 'Hartsfield-Jackson Atlanta',
      scheduled: '2024-01-15T14:30:00Z',
      terminal: 'S',
      gate: 'C21'
    },
    arrival: {
      iata: 'ORD',
      airport: "O'Hare International",
      scheduled: '2024-01-15T16:00:00Z',
      terminal: '2',
      gate: 'E5'
    },
    status: 'active',
    duration: '2h 30m',
    aircraft: 'Airbus A320'
  },
  {
    flightNumber: 'UA789',
    airline: { code: 'UA', name: 'United Airlines', logo: '✈️' },
    departure: {
      iata: 'SFO',
      airport: 'San Francisco International',
      scheduled: '2024-01-15T09:15:00Z',
      terminal: '3',
      gate: 'F8'
    },
    arrival: {
      iata: 'LHR',
      airport: 'Heathrow Airport',
      scheduled: '2024-01-15T18:30:00Z',
      terminal: '2',
      gate: 'B15'
    },
    status: 'landed',
    duration: '10h 15m',
    aircraft: 'Boeing 787'
  }
]