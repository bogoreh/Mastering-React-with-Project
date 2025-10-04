import React, { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import FilterSection from './components/FilterSection/FilterSection'
import EventCard from './components/EventCard/EventCard'
import { useEvents } from './hooks/useEvents'
import { EVENT_CATEGORIES, EVENT_TYPES } from './utils/constants'

function App() {
  const { events, loading, error } = useEvents()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
      const matchesType = selectedType === 'all' || event.type === selectedType
      
      const matchesDate = dateFilter === 'all' || 
                         (dateFilter === 'upcoming' && new Date(event.date) > new Date()) ||
                         (dateFilter === 'past' && new Date(event.date) < new Date())

      return matchesSearch && matchesCategory && matchesType && matchesDate
    })
  }, [events, searchTerm, selectedCategory, selectedType, dateFilter])

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading events...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🎉 EventFinder</h1>
          <p className="app-subtitle">Discover amazing events near you</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="search-section">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          <div className="content-layout">
            <aside className="filters-sidebar">
              <FilterSection
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                dateFilter={dateFilter}
                onDateFilterChange={setDateFilter}
                categories={EVENT_CATEGORIES}
                types={EVENT_TYPES}
              />
            </aside>

            <section className="events-section">
              <div className="events-header">
                <h2>Upcoming Events</h2>
                <span className="events-count">{filteredEvents.length} events found</span>
              </div>

              <div className="events-grid">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <div className="no-events">
                    <h3>No events found</h3>
                    <p>Try adjusting your search or filters</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App