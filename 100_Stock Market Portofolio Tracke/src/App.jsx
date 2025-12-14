import { useState, useEffect } from 'react'
import Header from './components/Header'
import PortfolioSummary from './components/PortfolioSummary'
import StockList from './components/StockList'
import AddStockForm from './components/AddStockForm'
import Chart from './components/Chart'
import './App.css'

function App() {
  const [stocks, setStocks] = useState([])
  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalGainLoss, setTotalGainLoss] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Load stocks from localStorage on initial render
  useEffect(() => {
    const savedStocks = JSON.parse(localStorage.getItem('portfolioStocks'))
    if (savedStocks && savedStocks.length > 0) {
      setStocks(savedStocks)
    } else {
      // Sample data for initial demo
      const sampleStocks = [
        { id: 1, symbol: 'AAPL', name: 'Apple Inc.', shares: 10, purchasePrice: 150.25, currentPrice: 172.88, sector: 'Technology' },
        { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 5, purchasePrice: 125.50, currentPrice: 138.25, sector: 'Technology' },
        { id: 3, symbol: 'TSLA', name: 'Tesla Inc.', shares: 8, purchasePrice: 210.75, currentPrice: 175.42, sector: 'Automotive' },
        { id: 4, symbol: 'MSFT', name: 'Microsoft Corp.', shares: 15, purchasePrice: 280.30, currentPrice: 328.75, sector: 'Technology' },
        { id: 5, symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 7, purchasePrice: 130.20, currentPrice: 145.33, sector: 'E-commerce' },
        { id: 6, symbol: 'JPM', name: 'JPMorgan Chase', shares: 12, purchasePrice: 135.40, currentPrice: 155.60, sector: 'Finance' },
      ]
      setStocks(sampleStocks)
      localStorage.setItem('portfolioStocks', JSON.stringify(sampleStocks))
    }
    setIsLoading(false)
  }, [])

  // Calculate portfolio metrics whenever stocks change
  useEffect(() => {
    if (stocks.length > 0) {
      let totalValue = 0
      let totalCost = 0
      
      stocks.forEach(stock => {
        totalValue += stock.shares * stock.currentPrice
        totalCost += stock.shares * stock.purchasePrice
      })
      
      setPortfolioValue(totalValue)
      setTotalGainLoss(totalValue - totalCost)
      
      // Save to localStorage
      localStorage.setItem('portfolioStocks', JSON.stringify(stocks))
    }
  }, [stocks])

  const addStock = (newStock) => {
    // Generate a unique ID for the new stock
    const stockWithId = {
      ...newStock,
      id: stocks.length > 0 ? Math.max(...stocks.map(s => s.id)) + 1 : 1
    }
    
    setStocks([...stocks, stockWithId])
  }

  const updateStock = (id, updatedData) => {
    setStocks(stocks.map(stock => 
      stock.id === id ? { ...stock, ...updatedData } : stock
    ))
  }

  const removeStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id))
  }

  const refreshPrices = () => {
    // Simulate price updates
    const updatedStocks = stocks.map(stock => {
      // Simulate random price changes (-5% to +5%)
      const changePercent = (Math.random() * 10 - 5) / 100
      const newPrice = stock.currentPrice * (1 + changePercent)
      
      return {
        ...stock,
        currentPrice: parseFloat(newPrice.toFixed(2))
      }
    })
    
    setStocks(updatedStocks)
  }

  if (isLoading) {
    return <div className="loading">Loading portfolio...</div>
  }

  return (
    <div className="app">
      <Header onRefresh={refreshPrices} />
      
      <div className="main-container">
        <div className="left-panel">
          <PortfolioSummary 
            portfolioValue={portfolioValue}
            totalGainLoss={totalGainLoss}
            stocks={stocks}
          />
          
          <Chart stocks={stocks} />
        </div>
        
        <div className="right-panel">
          <AddStockForm onAddStock={addStock} />
          
          <StockList 
            stocks={stocks}
            onUpdateStock={updateStock}
            onRemoveStock={removeStock}
          />
        </div>
      </div>
    </div>
  )
}

export default App