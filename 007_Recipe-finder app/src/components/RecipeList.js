import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div className="recipe-list">
        <p className="no-recipes">No recipes found. Try a different ingredient!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;