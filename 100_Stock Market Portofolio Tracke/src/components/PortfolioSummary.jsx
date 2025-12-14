import React from 'react';
import './PortfolioSummary.css';

const PortfolioSummary = ({ portfolioValue, totalGainLoss, stocks }) => {
  const sectors = {};
  stocks.forEach(stock => {
    sectors[stock.sector] = (sectors[stock.sector] || 0) + (stock.shares * stock.currentPrice);
  });
  
  const sectorData = Object.entries(sectors).map(([name, value]) => ({
    name,
    value,
    percentage: (value / portfolioValue * 100).toFixed(1)
  }));

  return (
    <div className="portfolio-summary">
      <h2 className="section-title">Portfolio Summary</h2>
      
      <div className="summary-cards">
        <div className="summary-card total-value">
          <h3>Total Value</h3>
          <div className="card-value">${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div className="card-change positive">+2.3% today</div>
        </div>
        
        <div className="summary-card gain-loss">
          <h3>Total Gain/Loss</h3>
          <div className={`card-value ${totalGainLoss >= 0 ? 'positive' : 'negative'}`}>
            ${totalGainLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`card-change ${totalGainLoss >= 0 ? 'positive' : 'negative'}`}>
            {totalGainLoss >= 0 ? '+' : ''}{(totalGainLoss / (portfolioValue - totalGainLoss) * 100 || 0).toFixed(2)}% all time
          </div>
        </div>
        
        <div className="summary-card holdings">
          <h3>Holdings</h3>
          <div className="card-value">{stocks.length}</div>
          <div className="card-change">stocks</div>
        </div>
      </div>
      
      <div className="sector-allocation">
        <h3>Sector Allocation</h3>
        <div className="sector-list">
          {sectorData.map((sector, index) => (
            <div className="sector-item" key={index}>
              <div className="sector-header">
                <span className="sector-name">{sector.name}</span>
                <span className="sector-percentage">{sector.percentage}%</span>
              </div>
              <div className="sector-bar">
                <div 
                  className="sector-bar-fill" 
                  style={{ 
                    width: `${sector.percentage}%`,
                    backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;