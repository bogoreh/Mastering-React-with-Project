import React from 'react'
import LightSwitch from './components/LightSwitch'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Neumorphic Light Switch</h1>
      <div className="switches-container">
        <LightSwitch />
        <LightSwitch initialOn={true} />
        <LightSwitch />
      </div>
    </div>
  )
}

export default App