import React, { useState } from 'react';
import './AddStockForm.css';

const AddStockForm = ({ onAddStock }) => {
  const [formData, setFormData] = useState({
    symbol: '',
    name: '',
    shares: 1,
    purchasePrice: '',
    sector: 'Technology'
  });
  
  const [errors, setErrors] = useState({});
  
  const sectors = [
    'Technology',
    'Automotive',
    'E-commerce',
    'Finance',
    'Healthcare',
    'Energy',
    'Consumer Goods',
    'Utilities',
    'Real Estate',
    'Communication'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'shares' ? parseInt(value) || 1 : value
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.symbol.trim()) {
      newErrors.symbol = 'Stock symbol is required';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Company name is required';
    }
    
    if (formData.shares < 1) {
      newErrors.shares = 'Shares must be at least 1';
    }
    
    if (!formData.purchasePrice || formData.purchasePrice <= 0) {
      newErrors.purchasePrice = 'Purchase price must be greater than 0';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Generate a current price (slightly different from purchase price)
    const currentPrice = parseFloat(formData.purchasePrice) * (1 + (Math.random() * 0.2 - 0.1));
    
    const newStock = {
      ...formData,
      purchasePrice: parseFloat(formData.purchasePrice),
      currentPrice: parseFloat(currentPrice.toFixed(2))
    };
    
    onAddStock(newStock);
    
    // Reset form
    setFormData({
      symbol: '',
      name: '',
      shares: 1,
      purchasePrice: '',
      sector: 'Technology'
    });
    
    setErrors({});
  };
  
  // Sample stocks for quick add
  const sampleStocks = [
    { symbol: 'NVDA', name: 'NVIDIA Corp', sector: 'Technology' },
    { symbol: 'META', name: 'Meta Platforms', sector: 'Technology' },
    { symbol: 'NFLX', name: 'Netflix Inc', sector: 'Communication' },
    { symbol: 'V', name: 'Visa Inc', sector: 'Finance' }
  ];
  
  const handleQuickAdd = (stock) => {
    const newStock = {
      symbol: stock.symbol,
      name: stock.name,
      shares: 10,
      purchasePrice: (Math.random() * 500 + 50).toFixed(2),
      sector: stock.sector,
      currentPrice: (Math.random() * 500 + 50).toFixed(2)
    };
    
    onAddStock(newStock);
  };

  return (
    <div className="add-stock-form">
      <h2 className="section-title">Add New Stock</h2>
      
      <form onSubmit={handleSubmit} className="stock-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="symbol">Stock Symbol *</label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              placeholder="e.g., AAPL"
              className={errors.symbol ? 'error' : ''}
              maxLength="10"
            />
            {errors.symbol && <span className="error-message">{errors.symbol}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Company Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Apple Inc."
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shares">Shares *</label>
            <input
              type="number"
              id="shares"
              name="shares"
              value={formData.shares}
              onChange={handleChange}
              min="1"
              className={errors.shares ? 'error' : ''}
            />
            {errors.shares && <span className="error-message">{errors.shares}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="purchasePrice">Purchase Price ($) *</label>
            <input
              type="number"
              id="purchasePrice"
              name="purchasePrice"
              value={formData.purchasePrice}
              onChange={handleChange}
              step="0.01"
              min="0.01"
              placeholder="0.00"
              className={errors.purchasePrice ? 'error' : ''}
            />
            {errors.purchasePrice && <span className="error-message">{errors.purchasePrice}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="sector">Sector</label>
            <select
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button type="submit" className="submit-btn">
          <span className="submit-icon">+</span> Add to Portfolio
        </button>
      </form>
      
      <div className="quick-add">
        <h3>Quick Add Popular Stocks</h3>
        <div className="quick-stocks">
          {sampleStocks.map((stock, index) => (
            <button 
              key={index}
              className="quick-stock-btn"
              onClick={() => handleQuickAdd(stock)}
            >
              <span className="quick-symbol">{stock.symbol}</span>
              <span className="quick-name">{stock.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStockForm;