import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import SearchBar from '../components/SearchBar'

const Home = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Share Your Culinary Creations</h1>
        <p>Discover and share amazing recipes from home cooks around the world</p>
      </div>

      <div className="search-section">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-recipes">
          <h3>No recipes found</h3>
          <p>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  )
}

export default Home