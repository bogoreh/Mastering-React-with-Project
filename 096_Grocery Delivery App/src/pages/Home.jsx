import { ArrowRight, Clock, Shield, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Avocado',
      price: 2.99,
      originalPrice: 3.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop',
      rating: 4,
      reviews: 128,
      unit: 'each'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop',
      rating: 5,
      reviews: 256,
      unit: '1lb'
    },
    {
      id: 3,
      name: 'Free Range Eggs',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop',
      rating: 4,
      reviews: 89,
      unit: 'dozen'
    },
    {
      id: 4,
      name: 'Whole Wheat Bread',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      rating: 4,
      reviews: 203,
      unit: 'loaf'
    }
  ]

  const handleCategorySelect = (categoryId) => {
    console.log('Selected category:', categoryId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Groceries Delivered to Your Doorstep
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Get your favorite groceries delivered in 30 minutes or less. Quality guaranteed!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Clock className="text-green-600" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">30-Minute Delivery</h3>
            <p className="text-gray-600">Get your order super fast</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Shield className="text-green-600" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Quality Guaranteed</h3>
            <p className="text-gray-600">Freshness you can trust</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Truck className="text-green-600" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p className="text-gray-600">On orders over $35</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <CategoryFilter onCategorySelect={handleCategorySelect} />

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-green-600 hover:text-green-700 font-semibold">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get 20% Off Your First Order!</h2>
        <p className="text-xl mb-6 opacity-90">Use code: WELCOME20 at checkout</p>
        <Link
          to="/products"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Claim Offer
        </Link>
      </div>
    </div>
  )
}

export default Home