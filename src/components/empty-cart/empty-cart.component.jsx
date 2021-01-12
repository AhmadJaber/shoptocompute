import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants/routes';

export default function EmptyCart() {
  return (
    <section className="empty-cart section">
      <h2>empty cart... </h2>
      <Link to={PRODUCTS} className="btn btn-primary">
        fill it
      </Link>
    </section>
  );
}
