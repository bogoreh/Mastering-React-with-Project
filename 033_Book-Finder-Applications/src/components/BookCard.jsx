import React from 'react'

const BookCard = ({ book }) => {
  const {
    volumeInfo: {
      title,
      authors = [],
      publishedDate,
      description,
      imageLinks = {},
      pageCount,
      categories = [],
      previewLink
    }
  } = book

  const thumbnail = imageLinks.thumbnail || imageLinks.smallThumbnail

  return (
    <div className="book-card">
      <div className="book-image-container">
        {thumbnail ? (
          <img
            src={thumbnail.replace('http://', 'https://')}
            alt={title}
            className="book-image"
          />
        ) : (
          <div className="book-image-placeholder">
            <span className="placeholder-icon">📚</span>
          </div>
        )}
      </div>

      <div className="book-content">
        <h3 className="book-title">{title}</h3>
        
        {authors.length > 0 && (
          <p className="book-authors">
            by {authors.join(', ')}
          </p>
        )}

        {publishedDate && (
          <p className="book-meta">
            Published: {new Date(publishedDate).getFullYear()}
          </p>
        )}

        {pageCount && (
          <p className="book-meta">
            Pages: {pageCount}
          </p>
        )}

        {categories.length > 0 && (
          <div className="book-categories">
            {categories.slice(0, 2).map((category, index) => (
              <span key={index} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="book-description">
            {description.length > 150 
              ? `${description.substring(0, 150)}...` 
              : description
            }
          </p>
        )}

        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-link"
          >
            Preview Book
          </a>
        )}
      </div>
    </div>
  )
}

export default BookCard