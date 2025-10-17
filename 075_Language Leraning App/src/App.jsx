import React, { useState } from 'react'
import Header from './components/common/Header'
import Dashboard from './pages/Dashboard'
import Lessons from './pages/Lessons'
import Profile from './pages/Profile'
import './styles/globals.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [userProgress, setUserProgress] = useState({
    streak: 5,
    points: 1250,
    level: 3,
    completedLessons: 8
  })

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard progress={userProgress} />
      case 'lessons':
        return <Lessons />
      case 'profile':
        return <Profile progress={userProgress} />
      default:
        return <Dashboard progress={userProgress} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App