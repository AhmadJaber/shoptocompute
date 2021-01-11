import React from 'react';
import { Link } from 'react-router-dom';
import { Hero, FeaturedProducts } from '../components';

export default function Home() {
  return (
    <>
      <Hero>
        <span className="new-product">New</span>
        <h2 className="new-product-title">RAZER BLADE STEALTH 13</h2>
        <div className="new-product-slogan">
          The World’s First Gaming Ultrabook
        </div>

        <div>
          <Link to="/products" className="btn btn-primary btn-hero">
            our products
          </Link>
        </div>
      </Hero>

      <FeaturedProducts />
    </>
  );
}
