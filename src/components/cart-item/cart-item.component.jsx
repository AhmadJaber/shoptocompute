import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart';

export default function CartItem({
  id,
  image,
  title,
  price,
  amount,
  quantitiy,
}) {
  const {
    increaseItemAmount,
    decreaseItemAmount,
    removeCartItem,
  } = React.useContext(CartContext);

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeCartItem(id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        {amount !== quantitiy ? (
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => {
              increaseItemAmount(id);
            }}
          >
            <FaAngleUp />
          </button>
        ) : null}

        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseItemAmount(id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
