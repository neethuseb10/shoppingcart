import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products'); // 👈 This navigates to the home route that shows ProductGrid
  };
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="hero-content">
         <div className="logo-text">Ishaara</div>
        {/* Tagline + Button */}
        <p className="tagline">Jewels that speak without words</p>
        <button className="hero-button"  onClick={handleShopNow}>Shop the Collection</button>
      </div>
    </section>
  );
};

export default HeroSection;
