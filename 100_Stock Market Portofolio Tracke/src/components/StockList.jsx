import React, { useState } from 'react';
import StockCard from './StockCard';
import './StockList.css';

const StockList = ({ stocks, onUpdateStock, onRemoveStock }) => {
  const [sortBy, setSortBy] = useState('symbol');
  const [filterSector, setFilterSector] = useState('all');
  
  const sectors = ['all', ...new Set(stocks.map(stock => stock.sector))];
  
  const sortedAndFilteredStocks = stocks
    .filter(stock => filterSector === 'all' || stock.sector === filterSector)
    .sort((a, b) => {
      if (sortBy === 'symbol') return a.symbol.localeCompare(b.symbol);
      if (sortBy === 'value') return (b.shares * b.currentPrice) - (a.shares * a.currentPrice);
      if (sortBy === 'gain') {
        const gainA = (a.currentPrice - a.purchasePrice) * a.shares;
        const gainB = (b.currentPrice - b.purchasePrice) * b.shares;
        return gainB - gainA;
      }
      return 0;
    });
  
  const totalStocksValue = stocks.reduce((sum, stock) => sum + (stock.shares * stock.currentPrice), 0);

  return (
    <div className="stock-list-container">
      <div className="list-header">
        <h2 className="section-title">Your Holdings</h2>
        
        <div className="list-controls">
          <div className="control-group">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select" 
              className="control-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="symbol">Symbol</option>
              <option value="value">Total Value</option>
              <option value="gain">Gain/Loss</option>
            </select>
          </div>
          
          <div className="control-group">
            <label htmlFor="filter-select">Sector:</label>
            <select 
              id="filter-select" 
              className="control-select"
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>
                  {sector === 'all' ? 'All Sectors' : sector}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="stocks-count">
        Showing {sortedAndFilteredStocks.length} of {stocks.length} holdings
        <span className="total-value">
          Total: ${totalStocksValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>
      
      <div className="stock-list">
        {sortedAndFilteredStocks.length === 0 ? (
          <div className="empty-list">
            <div className="empty-icon">📊</div>
            <p>No stocks found with the selected filter.</p>
          </div>
        ) : (
          sortedAndFilteredStocks.map(stock => (
            <StockCard 
              key={stock.id}
              stock={stock}
              onUpdateStock={onUpdateStock}
              onRemoveStock={onRemoveStock}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StockList;