import GifCard from './GifCard';
import '../styles/App.css';

const GifGrid = ({ gifs, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading awesome GIFs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <p>Please check your API key and try again.</p>
      </div>
    );
  }

  if (gifs.length === 0) {
    return (
      <div className="empty-container">
        <p>No GIFs found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="gif-grid-container">
      <div className="container">
        <div className="gif-grid">
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GifGrid;