import React, { useState } from 'react';
import './StockCard.css';

const StockCard = ({ stock, onUpdateStock, onRemoveStock }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedShares, setEditedShares] = useState(stock.shares);
  
  const currentValue = stock.shares * stock.currentPrice;
  const totalCost = stock.shares * stock.purchasePrice;
  const gainLoss = currentValue - totalCost;
  const gainLossPercent = ((gainLoss / totalCost) * 100).toFixed(2);
  
  const handleSave = () => {
    onUpdateStock(stock.id, { shares: parseInt(editedShares) });
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setEditedShares(stock.shares);
    setIsEditing(false);
  };
  
  const getSectorColor = (sector) => {
    const colors = {
      'Technology': '#4facfe',
      'Automotive': '#ff6b6b',
      'E-commerce': '#1dd1a1',
      'Finance': '#feca57',
      'Healthcare': '#5f27cd',
      'Energy': '#ff9f43'
    };
    
    return colors[sector] || '#8395a7';
  };

  return (
    <div className="stock-card">
      <div className="stock-header">
        <div className="stock-symbol">
          <div 
            className="sector-indicator" 
            style={{ backgroundColor: getSectorColor(stock.sector) }}
          ></div>
          <div>
            <h3 className="symbol">{stock.symbol}</h3>
            <p className="stock-name">{stock.name}</p>
          </div>
        </div>
        
        <div className="stock-actions">
          <button 
            className="action-btn edit-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button 
            className="action-btn delete-btn"
            onClick={() => onRemoveStock(stock.id)}
          >
            Remove
          </button>
        </div>
      </div>
      
      <div className="stock-details">
        <div className="detail-row">
          <div className="detail-item">
            <span className="detail-label">Shares</span>
            {isEditing ? (
              <div className="edit-shares">
                <input 
                  type="number" 
                  value={editedShares}
                  onChange={(e) => setEditedShares(e.target.value)}
                  className="shares-input"
                  min="1"
                />
                <button className="save-btn" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <span className="detail-value">{stock.shares}</span>
            )}
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Avg Cost</span>
            <span className="detail-value">${stock.purchasePrice.toFixed(2)}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Current Price</span>
            <span className="detail-value">${stock.currentPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="detail-row">
          <div className="detail-item">
            <span className="detail-label">Market Value</span>
            <span className="detail-value">${currentValue.toFixed(2)}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Gain/Loss</span>
            <span className={`detail-value ${gainLoss >= 0 ? 'positive' : 'negative'}`}>
              ${gainLoss.toFixed(2)} ({gainLossPercent}%)
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Sector</span>
            <span 
              className="sector-tag"
              style={{ backgroundColor: getSectorColor(stock.sector) }}
            >
              {stock.sector}
            </span>
          </div>
        </div>
      </div>
      
      <div className="stock-footer">
        <div className="value-bar">
          <div 
            className="value-bar-fill" 
            style={{ 
              width: `${Math.min(100, (currentValue / 10000) * 100)}%`,
              backgroundColor: gainLoss >= 0 ? '#10b981' : '#ef4444'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;