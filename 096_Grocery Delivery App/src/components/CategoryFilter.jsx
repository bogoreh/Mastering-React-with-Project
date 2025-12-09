import { useState } from 'react'

const categories = [
  { id: 1, name: 'All', icon: '🛒' },
  { id: 2, name: 'Fruits', icon: '🍎' },
  { id: 3, name: 'Vegetables', icon: '🥦' },
  { id: 4, name: 'Dairy', icon: '🥛' },
  { id: 5, name: 'Meat', icon: '🥩' },
  { id: 6, name: 'Bakery', icon: '🍞' },
  { id: 7, name: 'Beverages', icon: '🥤' },
  { id: 8, name: 'Snacks', icon: '🍪' },
]

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(1)

  const handleSelect = (categoryId) => {
    setSelectedCategory(categoryId)
    onCategorySelect(categoryId)
  }

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className={`flex flex-col items-center p-4 rounded-xl min-w-[100px] transition-all ${
              selectedCategory === category.id
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 shadow hover:shadow-md'
            }`}
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter