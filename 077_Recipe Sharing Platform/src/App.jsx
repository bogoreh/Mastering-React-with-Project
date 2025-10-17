import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'
import RecipeDetail from './pages/RecipeDetail'
import { sampleRecipes } from './data/sampleRecipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const addRecipe = (newRecipe) => {
    const recipeWithId = {
      ...newRecipe,
      id: Date.now().toString()
    }
    setRecipes([recipeWithId, ...recipes])
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home recipes={recipes} />} />
            <Route path="/add-recipe" element={<AddRecipe onAddRecipe={addRecipe} />} />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App