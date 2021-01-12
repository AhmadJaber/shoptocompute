import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart';
import { CHECKOUT, LOGIN } from '../constants/routes';
import { CartItem, EmptyCart } from '../components';

export default function Cart() {
  const { cart, cartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-items section">
      <h2>your cart</h2>

      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <h2>total : $ {cartTotal}</h2>

      <Link to={CHECKOUT} className="btn btn-primary btn-block">
        checkout
      </Link>
      <Link to={LOGIN} className="btn btn-primary btn-block">
        login
      </Link>
    </section>
  );
}
