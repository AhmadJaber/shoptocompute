import React, { createContext, useReducer, useState, useEffect } from 'react';
import { reducer } from './cart-reducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE,
} from '../constants/actions';

const CartContext = createContext();

function getCartFromLocalStorage() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  console.log('cart', cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    // amount of carts
    const amountOfCarts = cart.reduce(
      (total, item) => (total += item.amount),
      0
    );
  }, [cart]);

  // add to cart
  function addToCart(product) {
    const item = cart.find((itm) => itm.id === product.id);

    if (item) {
      dispatch({ type: INCREASE, payload: { id: product.id } });
    } else {
      dispatch({ type: ADD_TO_CART, payload: product });
    }
  }

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider value={{ addToCart, clearCart, cart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
