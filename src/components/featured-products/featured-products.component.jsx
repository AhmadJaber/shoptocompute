import React, { useContext } from 'react';
import Loading from '../loading/loading.component';
import ProductList from '../product-list/product-list.component';
import { ProductContext } from '../../context/products';

export default function FeaturedProducts() {
  const { featured, loading } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return <ProductList title="featured laptops" products={featured} />;
}
