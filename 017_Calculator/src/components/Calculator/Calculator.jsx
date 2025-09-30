import React, { useState } from 'react'
import Button from '../Button'
import './Calculator.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num))
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const handlePercentage = () => {
    const currentValue = parseFloat(display)
    setDisplay(String(currentValue / 100))
  }

  const handlePlusMinus = () => {
    setDisplay(String(parseFloat(display) * -1))
  }

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-value">{display}</div>
      </div>
      
      <div className="calculator-buttons">
        <Button type="clear" onClick={clear}>C</Button>
        <Button type="default" onClick={handlePlusMinus}>±</Button>
        <Button type="default" onClick={handlePercentage}>%</Button>
        <Button type="operator" onClick={() => performOperation('÷')}>÷</Button>

        <Button type="default" onClick={() => inputNumber(7)}>7</Button>
        <Button type="default" onClick={() => inputNumber(8)}>8</Button>
        <Button type="default" onClick={() => inputNumber(9)}>9</Button>
        <Button type="operator" onClick={() => performOperation('×')}>×</Button>

        <Button type="default" onClick={() => inputNumber(4)}>4</Button>
        <Button type="default" onClick={() => inputNumber(5)}>5</Button>
        <Button type="default" onClick={() => inputNumber(6)}>6</Button>
        <Button type="operator" onClick={() => performOperation('-')}>-</Button>

        <Button type="default" onClick={() => inputNumber(1)}>1</Button>
        <Button type="default" onClick={() => inputNumber(2)}>2</Button>
        <Button type="default" onClick={() => inputNumber(3)}>3</Button>
        <Button type="operator" onClick={() => performOperation('+')}>+</Button>

        <Button type="default" size="wide" onClick={() => inputNumber(0)}>0</Button>
        <Button type="default" onClick={inputDecimal}>.</Button>
        <Button type="equals" onClick={handleEquals}>=</Button>
      </div>
    </div>
  )
}

export default Calculator