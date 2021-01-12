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
  const [cartNumber, setCartNumber] = useState(0);

  console.log('cart', cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    // amount of carts
    const amountOfCarts = cart.reduce((accm, item) => accm + item.amount, 0);
    setCartNumber(amountOfCarts);

    // total money
    let totalMoney = cart.reduce(
      (accm, item) => accm + item.price * item.amount,
      0
    );

    totalMoney = parseFloat(totalMoney.toFixed(2)).toLocaleString();
    setCartTotal(totalMoney);
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

  // increase cartitem
  const increaseItemAmount = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  // decrease cartitem
  const decreaseItemAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: REMOVE, payload: { id } });
    } else {
      dispatch({ type: DECREASE, payload: { id } });
    }
  };

  // remove cart-item
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,
        increaseItemAmount,
        decreaseItemAmount,
        removeCartItem,
        cart,
        cartTotal,
        cartNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
