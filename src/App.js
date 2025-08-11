import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const handleUpdateQuantity = (id, newQty) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item
    )
  );
};

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
  <Route
    path="/"
    element={
      <>
        <HeroSection />
        <ProductGrid onAddToCart={handleAddToCart} />
      </>
    }
  />
  <Route
    path="/cart"
    element={
      <CartPage
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    }
  />
  <Route
    path="/products"
    element={
      <>
        <HeroSection />
        <ProductGrid onAddToCart={handleAddToCart} />
      </>
    }
  />
  <Route
    path="/product/:id"
    element={<ProductDetails onAddToCart={handleAddToCart} />}
  />
  <Route path="/checkout" element={<CheckoutPage />} />
</Routes>

     
    </Router>
  );
}

export default App;
