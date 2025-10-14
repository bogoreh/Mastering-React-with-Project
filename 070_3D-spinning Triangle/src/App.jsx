import React from 'react'
import SpinningTriangle from './components/SpinningTriangle'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">3D Magic Triangle</h1>
        <p className="subtitle">Experience the beauty of WebGL with Three.js</p>
      </div>
      
      <div className="triangle-container">
        <SpinningTriangle />
      </div>
      
      <div className="controls">
        <div className="control-group">
          <label>Rotation Speed</label>
          <div className="speed-indicators">
            <span>Slow</span>
            <span>Medium</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>Built with React + Three.js + Vite</p>
      </footer>
    </div>
  )
}

export default App