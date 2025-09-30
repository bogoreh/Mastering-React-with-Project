import { useState } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Notes from './pages/Notes'
import './styles/App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'tasks':
        return <Tasks />
      case 'notes':
        return <Notes />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App