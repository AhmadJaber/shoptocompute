import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';

export default function Home() {
  return (
    <>
      <Hero>
        <span className="new-product">New</span>
        <h2 className="new-product-title">MacBook Air</h2>
        <div className="new-product-slogan">Power. It’s in the Air.</div>

        <div>
          <Link to="/products" className="btn btn-primary btn-hero">
            our products
          </Link>
        </div>
      </Hero>
    </>
  );
}
