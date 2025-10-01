import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to ShopEasy</h1>
          <p>Discover amazing products at great prices</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container">
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;