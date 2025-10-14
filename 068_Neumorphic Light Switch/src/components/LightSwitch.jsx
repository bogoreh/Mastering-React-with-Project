import React, { useState } from 'react'

const LightSwitch = ({ initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={`switch-container ${isOn ? 'on' : 'off'}`}>
      <div 
        className="switch-background"
        onClick={toggleSwitch}
      >
        <div className={`switch-handle ${isOn ? 'on' : 'off'}`}>
          <div className="switch-indicator">
            {isOn ? 'ON' : 'OFF'}
          </div>
        </div>
      </div>
      <div className="switch-label">
        {isOn ? 'Light On' : 'Light Off'}
      </div>
    </div>
  )
}

export default LightSwitch