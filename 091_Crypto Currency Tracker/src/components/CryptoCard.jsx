const CryptoCard = ({ crypto }) => {
  const getPriceChangeColor = (change) => {
    return change >= 0 ? '#4cd964' : '#ff3b30';
  };

  const formatPrice = (price) => {
    if (price < 0.01) return price.toFixed(6);
    if (price < 1) return price.toFixed(4);
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <div className="crypto-icon-name">
          <img 
            src={crypto.image} 
            alt={crypto.name}
            className="crypto-icon"
          />
          <div>
            <h3>{crypto.name}</h3>
            <p className="crypto-symbol">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        <span className="crypto-rank">#{crypto.market_cap_rank}</span>
      </div>
      
      <div className="crypto-price">
        <h2>${formatPrice(crypto.current_price)}</h2>
        <p 
          className="price-change"
          style={{ color: getPriceChangeColor(crypto.price_change_percentage_24h) }}
        >
          {crypto.price_change_percentage_24h >= 0 ? '↗' : '↘'} 
          {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>
      
      <div className="crypto-stats">
        <div className="stat">
          <span className="stat-label">Market Cap</span>
          <span className="stat-value">
            ${(crypto.market_cap / 1000000000).toFixed(2)}B
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">24h Volume</span>
          <span className="stat-value">
            ${(crypto.total_volume / 1000000).toFixed(2)}M
          </span>
        </div>
      </div>
      
      <style jsx>{`
        .crypto-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .crypto-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .crypto-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        
        .crypto-icon-name {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .crypto-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .crypto-header h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        
        .crypto-symbol {
          color: #a0a0a0;
          font-size: 0.9rem;
        }
        
        .crypto-rank {
          background: rgba(0, 180, 219, 0.2);
          color: #00b4db;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .crypto-price {
          margin-bottom: 20px;
        }
        
        .crypto-price h2 {
          font-size: 1.8rem;
          margin-bottom: 5px;
        }
        
        .price-change {
          font-size: 1rem;
          font-weight: bold;
        }
        
        .crypto-stats {
          display: flex;
          justify-content: space-between;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat {
          display: flex;
          flex-direction: column;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #a0a0a0;
          margin-bottom: 5px;
        }
        
        .stat-value {
          font-size: 0.9rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CryptoCard;