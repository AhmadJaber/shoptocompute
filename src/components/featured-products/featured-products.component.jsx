import React, { useContext } from 'react';
import { Loading } from '..';
import { ProductContext } from '../../context/products';
import ProductList from '../product-list/product-list.component';

export default function FeaturedProducts() {
  const { featured, loading } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return <ProductList title="featured laptops" products={featured} />;
}
