import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './ProductGrid.css';
import { Link } from 'react-router-dom';

const ProductGrid = ({ onAddToCart }) => {
  const categories = [
    'all',
    'Necklaces',
    "Bangles",
    "rings",
    "jewelery"
    
  ];

  const [selectedCategory, setSelectedCategory] = useState('jewelery'); // default
  const [url, setUrl] = useState(
    'https://fakestoreapi.com/products/category/jewelery'
  );

  const { data: products, loading, error } = useFetch(url);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setUrl('https://fakestoreapi.com/products');
    } else {
      setUrl(
        'https://fakestoreapi.com/products/category/jewelery'
      );
    }
  }, [selectedCategory]);

  return (
    <section className="product-section">
      <div className="sidebar-and-products">
        {/* Sidebar filter */}
        <aside className="sidebar">
          <h4>Categories</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'active-category' : 'jewelery'}
              >
                {cat[0].toUpperCase() + cat.slice(1)}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="products">
          <h2 className="section-title">Featured Products</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="product-grid">
            {products &&
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} className="product-img" />
                    <h3>{product.title}</h3>
                  </Link>
                  <p>₹{Math.round(product.price * 80)}</p>
                  <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
