import React from 'react';
import './Article.css';

const Article = ({ article, onBack }) => {
  return (
    <div className="article-detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back to Articles
      </button>
      <img src={article.image} alt={article.title} className="article-detail-image" />
      <div className="article-detail-content">
        <h1>{article.title}</h1>
        <div className="article-detail-meta">
          <span className="author">By {article.author}</span>
          <span className="date">{article.date}</span>
        </div>
        <div className="article-body">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;