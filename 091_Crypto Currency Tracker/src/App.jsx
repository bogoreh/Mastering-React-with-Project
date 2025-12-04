import { useState, useEffect } from 'react';
import Header from './components/Header';
import CryptoCard from './components/CryptoCard';
import './App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from CoinGecko API
  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      setCryptos(data);
      setFilteredCryptos(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching crypto data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter cryptos based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCryptos(cryptos);
    } else {
      const filtered = cryptos.filter(crypto => 
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCryptos(filtered);
    }
  }, [searchTerm, cryptos]);

  // Fetch data on component mount
  useEffect(() => {
    fetchCryptoData();
    
    // Optional: Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Header />
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search cryptocurrencies (e.g., Bitcoin, ETH, Solana)"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loading">
          <p>Loading cryptocurrency data...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={fetchCryptoData} className="refresh-btn">
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="crypto-grid">
            {filteredCryptos.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </div>
          
          {filteredCryptos.length === 0 && (
            <div className="loading">
              <p>No cryptocurrencies found matching "{searchTerm}"</p>
            </div>
          )}
          
          <button onClick={fetchCryptoData} className="refresh-btn">
            ↻ Refresh Data
          </button>
        </>
      )}
    </div>
  );
}

export default App;