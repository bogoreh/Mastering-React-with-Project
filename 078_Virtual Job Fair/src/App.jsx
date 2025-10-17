import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Companies from './pages/Companies'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return <Jobs />
      case 'companies':
        return <Companies />
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