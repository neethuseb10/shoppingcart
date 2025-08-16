import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleShopNow = () => {
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="overlay" />
      <div className="hero-content">
        <div className="logo-text">Ishaara</div>
        <p className="tagline">Jewels that speak without words</p>
        <button className="hero-button" onClick={handleShopNow}>
          Shop the Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
