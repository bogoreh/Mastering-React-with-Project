import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={image.src} alt={image.title} />
        <div className="image-details">
          <h3>{image.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;