import React, { useState, useEffect } from 'react'
import './ImageSlider.css'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Sample images - replace these with your own images
  const images = [
    {
      url: '/images/image1.jpg',
      title: 'Beautiful Landscape',
      description: 'Experience the beauty of nature'
    },
    {
      url: '/images/image2.jpg',
      title: 'Mountain View',
      description: 'Majestic mountains touching the sky'
    },
    {
      url: '/images/image3.jpg',
      title: 'Ocean Sunset',
      description: 'Peaceful sunset by the ocean'
    },
    {
      url: '/images/image4.jpg',
      title: 'Forest Path',
      description: 'Serene walk through the woods'
    },
    {
      url: '/images/image5.jpg',
      title: 'City Lights',
      description: 'Vibrant city life at night'
    }
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <div 
          className="slide active"
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        >
          <div className="slide-content">
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="nav-btn prev-btn" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="nav-btn next-btn" onClick={nextSlide}>
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default ImageSlider