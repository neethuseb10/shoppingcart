import React, { useState } from 'react';
import './ProductGrid.css';

const ProductGrid = ({ onAddToCart }) => {
  const categories = ['all', 'Necklaces', 'Bangles', 'Rings'];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productsData = [
    {
      id: 1,
      title: "Gold Necklace",
      price: 2000,
      image: "/images/temple.jpg", // in public/images
      category: "Necklaces"
    },
    {
      id: 2,
      title: "Diamond Ring",
      price: 5000,
      image: "/images/ring.jpeg",
      category: "Rings"
    },
    {
      id: 3,
      title: "Bangles",
      price: 5000,
      image: "/images/antique.jpg",
      category: "Bangles"
    },
    {
      id: 4,
      title: "Pearl Necklace",
      price: 5000,
      image: "/images/pearlnecklace.jpg",
      category: "Necklaces"
    }
  ];

  // Filter products based on category
  const filteredProducts =
    selectedCategory === 'all'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="products-section" className="product-section">
      <div className="sidebar-and-products">
        
        {/* Sidebar filter */}
        <aside className="sidebar">
          <h4>Categories</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'active-category' : ''}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
       
        <div className="products">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(product)}
                >
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
