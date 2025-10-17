import React from 'react'
import RecipeForm from '../components/RecipeForm'

const AddRecipe = ({ onAddRecipe }) => {
  return (
    <div className="add-recipe-page">
      <div className="page-header">
        <h1>Share Your Recipe</h1>
        <p>Inspire others with your culinary creations</p>
      </div>
      <RecipeForm onSubmit={onAddRecipe} />
    </div>
  )
}

export default AddRecipe