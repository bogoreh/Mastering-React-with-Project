import React from 'react'

const Controls = ({ 
  points, 
  step, 
  lineWidth, 
  color, 
  onPointsChange, 
  onStepChange, 
  onLineWidthChange, 
  onColorChange 
}) => {
  return (
    <div className="controls">
      <div className="control-group">
        <div className="control-item">
          <label htmlFor="points">Number of Points: {points}</label>
          <input
            id="points"
            type="range"
            min="10"
            max="200"
            value={points}
            onChange={(e) => onPointsChange(parseInt(e.target.value))}
          />
          <div className="control-value">More points = more complex patterns</div>
        </div>

        <div className="control-item">
          <label htmlFor="step">Connection Step: {step}</label>
          <input
            id="step"
            type="range"
            min="1"
            max="50"
            value={step}
            onChange={(e) => onStepChange(parseInt(e.target.value))}
          />
          <div className="control-value">Controls pattern density</div>
        </div>

        <div className="control-item">
          <label htmlFor="lineWidth">Line Width: {lineWidth}px</label>
          <input
            id="lineWidth"
            type="range"
            min="1"
            max="10"
            value={lineWidth}
            onChange={(e) => onLineWidthChange(parseInt(e.target.value))}
          />
          <div className="control-value">Adjust line thickness</div>
        </div>

        <div className="control-item">
          <label htmlFor="color">Line Color</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
          />
          <div className="control-value">Click to choose color</div>
        </div>
      </div>
    </div>
  )
}

export default Controls