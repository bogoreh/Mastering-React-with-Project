import React from 'react';
import './Chart.css';

const Chart = ({ stocks }) => {
  // Prepare data for the chart
  const chartData = stocks.map(stock => ({
    symbol: stock.symbol,
    value: stock.shares * stock.currentPrice,
    color: getStockColor(stock.symbol)
  })).sort((a, b) => b.value - a.value);
  
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...chartData.map(item => item.value));
  
  function getStockColor(symbol) {
    const colors = [
      '#4facfe', '#00f2fe', '#2ecc71', '#9b59b6',
      '#f1c40f', '#e74c3c', '#1abc9c', '#d35400',
      '#3498db', '#8e44ad'
    ];
    
    // Generate consistent color based on symbol
    const index = symbol.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  }
  
  return (
    <div className="chart-container">
      <h2 className="section-title">Portfolio Distribution</h2>
      
      <div className="chart-content">
        <div className="chart-bars">
          {chartData.map((item, index) => (
            <div key={index} className="chart-bar-item">
              <div className="bar-label">
                <span className="bar-symbol">{item.symbol}</span>
                <span className="bar-value">
                  ${item.value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="bar-container">
                <div 
                  className="bar-fill"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color
                  }}
                ></div>
                <div className="bar-percentage">
                  {totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(1) : 0}%
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="chart-legend">
          <h3>Top Holdings</h3>
          <div className="legend-items">
            {chartData.slice(0, 5).map((item, index) => (
              <div key={index} className="legend-item">
                <div 
                  className="legend-color" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="legend-symbol">{item.symbol}</span>
                <span className="legend-percentage">
                  {totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(1) : 0}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;