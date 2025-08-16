import React from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-quantity">
                    Qty: {item.quantity}
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </span>
                </div>
                <div className="item-price">
                  ₹{item.price * item.quantity}
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="remove-icon"
                  title="Remove item"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total: ₹{totalPrice}</p>
            <Link to="/checkout">
              <button className="checkout-btn">Go to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
