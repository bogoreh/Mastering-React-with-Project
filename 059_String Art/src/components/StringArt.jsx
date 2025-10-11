import React, { useRef, useEffect, useState } from 'react'
import Controls from './Controls'

const StringArt = () => {
  const canvasRef = useRef(null)
  const [points, setPoints] = useState(100)
  const [step, setStep] = useState(13)
  const [lineWidth, setLineWidth] = useState(2)
  const [color, setColor] = useState('#6366f1')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const size = Math.min(600, window.innerWidth - 100)
    canvas.width = size
    canvas.height = size
    
    drawStringArt(ctx, size)
  }, [points, step, lineWidth, color])

  const drawStringArt = (ctx, size) => {
    // Clear canvas
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, size, size)
    
    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.4
    
    // Calculate points around a circle
    const pointArray = []
    for (let i = 0; i < points; i++) {
      const angle = (i * 2 * Math.PI) / points
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      pointArray.push({ x, y })
    }
    
    // Draw connecting lines
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    
    for (let i = 0; i < points; i++) {
      const startPoint = pointArray[i]
      const endIndex = (i * step) % points
      const endPoint = pointArray[endIndex]
      
      // Add some transparency for visual effect
      ctx.globalAlpha = 0.3
      
      ctx.beginPath()
      ctx.moveTo(startPoint.x, startPoint.y)
      ctx.lineTo(endPoint.x, endPoint.y)
      ctx.stroke()
    }
    
    // Reset global alpha
    ctx.globalAlpha = 1
    
    // Draw points (optional)
    ctx.fillStyle = color
    pointArray.forEach(point => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI)
      ctx.fill()
    })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Controls
        points={points}
        step={step}
        lineWidth={lineWidth}
        color={color}
        onPointsChange={setPoints}
        onStepChange={setStep}
        onLineWidthChange={setLineWidth}
        onColorChange={setColor}
      />
      
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          className="string-art-canvas"
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default StringArt