import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

// Mock data for demonstration
const mockRecipes = [
  {
    id: 1,
    title: 'Chicken Parmesan',
    image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
    readyInMinutes: 45,
    servings: 4,
    sourceUrl: 'https://example.com/recipe1'
  },
  {
    id: 2,
    title: 'Pasta Carbonara',
    image: 'https://spoonacular.com/recipeImages/716428-556x370.jpg',
    readyInMinutes: 30,
    servings: 2,
    sourceUrl: 'https://example.com/recipe2'
  },
  {
    id: 3,
    title: 'Tomato Basil Soup',
    image: 'https://spoonacular.com/recipeImages/716427-556x370.jpg',
    readyInMinutes: 25,
    servings: 4,
    sourceUrl: 'https://example.com/recipe3'
  },
  {
    id: 4,
    title: 'Vegetable Stir Fry',
    image: 'https://spoonacular.com/recipeImages/716426-556x370.jpg',
    readyInMinutes: 20,
    servings: 2,
    sourceUrl: 'https://example.com/recipe4'
  },
  {
    id: 5,
    title: 'Chocolate Chip Cookies',
    image: 'https://spoonacular.com/recipeImages/716425-556x370.jpg',
    readyInMinutes: 30,
    servings: 24,
    sourceUrl: 'https://example.com/recipe5'
  },
  {
    id: 6,
    title: 'Beef Tacos',
    image: 'https://spoonacular.com/recipeImages/716424-556x370.jpg',
    readyInMinutes: 25,
    servings: 4,
    sourceUrl: 'https://example.com/recipe6'
  }
];

function App() {
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (ingredient) => {
    // In a real app, you would make an API call here
    // For demonstration, we're using mock data
    setRecipes(mockRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(ingredient.toLowerCase())
    ));
    setHasSearched(true);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {hasSearched && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;