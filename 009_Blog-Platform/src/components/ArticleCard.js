import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article, onClick }) => {
  return (
    <article className="article-card" onClick={() => onClick(article.id)}>
      <div className="article-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="article-content">
        <h2>{article.title}</h2>
        <p className="excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span className="author">By {article.author}</span>
          <span className="date">{article.date}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;