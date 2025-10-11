import '../styles/App.css';

const GifCard = ({ gif }) => {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(gif.images.original.url);
      alert('GIF link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="gif-card">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        className="gif-image"
        loading="lazy"
      />
      <div className="gif-overlay">
        <button 
          onClick={handleCopyLink}
          className="copy-button"
          title="Copy GIF link"
        >
          📋
        </button>
      </div>
      <div className="gif-info">
        <p className="gif-title">{gif.title || 'Untitled GIF'}</p>
      </div>
    </div>
  );
};

export default GifCard;