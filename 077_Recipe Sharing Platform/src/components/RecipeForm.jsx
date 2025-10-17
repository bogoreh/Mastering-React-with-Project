import React, { useState } from 'react'

const RecipeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: [''],
    instructions: [''],
    category: '',
    author: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]]
    newArray[index] = value
    setFormData(prev => ({
      ...prev,
      [field]: newArray
    }))
  }

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayField = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      [field]: newArray
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    // Reset form
    setFormData({
      title: '',
      description: '',
      image: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      difficulty: 'Easy',
      ingredients: [''],
      instructions: [''],
      category: '',
      author: ''
    })
    alert('Recipe added successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add New Recipe</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label>Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Prep Time</label>
          <input
            type="text"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cook Time</label>
          <input
            type="text"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Servings</label>
          <input
            type="text"
            name="servings"
            value={formData.servings}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <label>Ingredients</label>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="array-field">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
              required
            />
            {formData.ingredients.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayField('ingredients', index)}
                className="remove-btn"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayField('ingredients')}
          className="add-btn"
        >
          + Add Ingredient
        </button>
      </div>

      <div className="form-section">
        <label>Instructions</label>
        {formData.instructions.map((instruction, index) => (
          <div key={index} className="array-field">
            <textarea
              value={instruction}
              onChange={(e) => handleArrayChange('instructions', index, e.target.value)}
              placeholder={`Step ${index + 1}`}
              required
            />
            {formData.instructions.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayField('instructions', index)}
                className="remove-btn"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayField('instructions')}
          className="add-btn"
        >
          + Add Step
        </button>
      </div>

      <button type="submit" className="submit-btn">
        Share Recipe
      </button>
    </form>
  )
}

export default RecipeForm