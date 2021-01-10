import React from 'react';
import Product from '../product/product.component';
import { Wrapper } from './product-list.styles';

export default function ProductList({ title, products }) {
  return (
    <Wrapper>
      <h2 className="section-title">{title}</h2>
      <div className="product-center">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
}
