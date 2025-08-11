import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';
const Navbar = ({ cartItems }) => {
  const navigate = useNavigate();
  const [isBumping, setIsBumping] = useState(false);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (cartItems.length === 0) return;
    setIsBumping(true);
    const timer = setTimeout(() => setIsBumping(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Ishaara Logo" className="logo-img" />
      </Link>

      <div className="cart" onClick={() => navigate('/cart')}>
        <FaShoppingCart size={24} />
        <span className={`cart-count ${isBumping ? 'bump' : ''}`}>{itemCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
