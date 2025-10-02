import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import VideoGrid from './components/VideoGrid'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="app__body">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`main-content ${!sidebarOpen ? 'expanded' : ''}`}>
          <VideoGrid />
        </main>
      </div>
    </div>
  )
}

export default App