import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import SchedulePage from './pages/SchedulePage'
import SpeakersPage from './pages/SpeakersPage'
import Networking from './pages/Networking'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <SchedulePage />
      case 'speakers':
        return <SpeakersPage />
      case 'networking':
        return <Networking />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App