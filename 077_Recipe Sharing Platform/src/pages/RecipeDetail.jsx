import React from 'react'
import { useParams, Link } from 'react-router-dom'

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === id)

  if (!recipe) {
    return (
      <div className="recipe-detail">
        <div className="not-found">
          <h2>Recipe not found</h2>
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-btn">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} className="detail-image" />
        <div className="recipe-info">
          <span className="category-badge">{recipe.category}</span>
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
          
          <div className="recipe-stats">
            <div className="stat">
              <span className="stat-label">Prep Time</span>
              <span className="stat-value">{recipe.prepTime}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Cook Time</span>
              <span className="stat-value">{recipe.cookTime}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Servings</span>
              <span className="stat-value">{recipe.servings}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Difficulty</span>
              <span className={`stat-value difficulty ${recipe.difficulty.toLowerCase()}`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
          
          <div className="author-info">
            <span>By {recipe.author}</span>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail