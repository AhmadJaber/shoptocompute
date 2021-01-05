import React from 'react';
import { Link } from 'react-router-dom';
import { CART, LOGIN } from '../../constants/routes';

// TODO: add icon to cart
export default function NavButton() {
  return (
    <div>
      <button className="login-btn" type="submit">
        logout
      </button>
      <Link to={LOGIN}>login</Link>

      <div className="cart-link-container">
        <Link to={CART}>cart</Link>
        <span className="cart-link-total">0</span>
      </div>
    </div>
  );
}
