import React, { useContext } from 'react';
import { ProductList, Loading } from '../components';
import { ProductContext } from '../context/products';

export default function Home() {
  const { loading, products } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return <ProductList title="gaming & coding laptops" products={products} />;
}
