import React, { useState } from 'react';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import Article from './components/Article';
import Footer from './components/Footer';
import articles from './data/articles';
import './App.css';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          {selectedArticle ? (
            <Article article={selectedArticle} onBack={handleBackClick} />
          ) : (
            <>
              <h2 className="section-title">Latest Articles</h2>
              <div className="articles-grid">
                {articles.map(article => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    onClick={handleArticleClick} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;