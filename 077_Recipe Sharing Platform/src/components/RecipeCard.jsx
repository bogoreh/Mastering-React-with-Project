import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <span className="recipe-category">{recipe.category}</span>
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        
        <div className="recipe-meta">
          <span className="meta-item">⏱️ {recipe.prepTime}</span>
          <span className="meta-item">👨‍👩‍👧‍👦 {recipe.servings}</span>
          <span className="meta-item difficulty">{recipe.difficulty}</span>
        </div>
        
        <div className="recipe-footer">
          <span className="author">By {recipe.author}</span>
          <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard