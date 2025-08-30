import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample image data - in a real app, you might fetch this from an API
  const images = [
    { id: 1, src: 'https://picsum.photos/300/300?random=1', title: 'Nature' },
    { id: 2, src: 'https://picsum.photos/300/300?random=2', title: 'Architecture' },
    { id: 3, src: 'https://picsum.photos/300/300?random=3', title: 'Travel' },
    { id: 4, src: 'https://picsum.photos/300/300?random=4', title: 'Food' },
    { id: 5, src: 'https://picsum.photos/300/300?random=5', title: 'Art' },
    { id: 6, src: 'https://picsum.photos/300/300?random=6', title: 'Technology' },
    { id: 7, src: 'https://picsum.photos/300/300?random=7', title: 'Sports' },
    { id: 8, src: 'https://picsum.photos/300/300?random=8', title: 'Animals' },
    { id: 9, src: 'https://picsum.photos/300/300?random=9', title: 'Fashion' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-overlay">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;