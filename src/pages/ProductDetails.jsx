import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { Loading } from '../components';
import { CartContext } from '../context/cart';
import { CART } from '../constants/routes';

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const history = useHistory();

  if (products.length === 0) {
    return <Loading />;
  }

  const singleProduct = products.find((product) => product.id === parseInt(id));
  const { images, title, discription, price } = singleProduct;

  return (
    <section className="single-product">
      <img
        src={images[0].imageMain}
        alt={title}
        className="single-product-image"
      />
      <article>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{discription}</p>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={() => {
            addToCart(singleProduct);
            history.push(CART);
          }}
        >
          add to cart
        </button>
      </article>
    </section>
  );
}
