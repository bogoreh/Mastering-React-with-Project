import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>Ready in: {recipe.readyInMinutes} minutes</p>
        <p>Servings: {recipe.servings}</p>
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;