import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { Loading } from '../components';

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

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
        <button className="btn btn-primary btn-block" type="submit">
          add to cart
        </button>
      </article>
    </section>
  );
}
