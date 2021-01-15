import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CART, LOGIN } from '../../constants/routes';
import { CartContext } from '../../context/cart';
import { UserContext } from '../../context/user';

// TODO: add icon to cart
export default function NavButton() {
  const { cartNumber, clearCart } = useContext(CartContext);
  const { user, userLogout } = React.useContext(UserContext);

  return (
    <div>
      {user.token ? (
        <button
          className="login-btn"
          type="button"
          onClick={() => {
            userLogout();
            clearCart();
          }}
        >
          logout
        </button>
      ) : (
        <Link to={LOGIN}>login</Link>
      )}

      <div className="cart-link-container">
        <Link to={CART}>cart</Link>
        <span className="cart-link-total">{cartNumber}</span>
      </div>
    </div>
  );
}
