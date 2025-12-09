import { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')

  const products = [
    {
      id: 1,
      name: 'Organic Avocado',
      price: 2.99,
      originalPrice: 3.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 128,
      unit: 'each',
      category: 'Fruits'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w-400&h-300&fit=crop',
      rating: 5,
      reviews: 256,
      unit: '1lb',
      category: 'Fruits'
    },
    {
      id: 3,
      name: 'Free Range Eggs',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 89,
      unit: 'dozen',
      category: 'Dairy'
    },
    {
      id: 4,
      name: 'Whole Wheat Bread',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 203,
      unit: 'loaf',
      category: 'Bakery'
    },
    {
      id: 5,
      name: 'Organic Spinach',
      price: 2.29,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 156,
      unit: 'bunch',
      category: 'Vegetables'
    },
    {
      id: 6,
      name: 'Almond Milk',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1622484206385-004897eed1af?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 342,
      unit: '1L',
      category: 'Beverages'
    },
    {
      id: 7,
      name: 'Chicken Breast',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1604503468507-8d6c924fe89a?w-400&h-300&fit=crop',
      rating: 5,
      reviews: 189,
      unit: '1lb',
      category: 'Meat'
    },
    {
      id: 8,
      name: 'Potato Chips',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w-400&h-300&fit=crop',
      rating: 4,
      reviews: 456,
      unit: 'bag',
      category: 'Snacks'
    }
  ]

  const handleCategorySelect = (categoryId) => {
    console.log('Selected category:', categoryId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">Fresh groceries delivered to your doorstep</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <CategoryFilter onCategorySelect={handleCategorySelect} />
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} />
            <span className="font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-500'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-500'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">← Previous</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-green-500 text-white' : 'hover:bg-gray-50'}`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next →</button>
      </div>
    </div>
  )
}

export default ProductListing