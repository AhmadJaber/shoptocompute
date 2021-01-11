import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../utils/url';
import { featuredProducts, flattenProductsData } from '../utils/helper';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  console.log('products', products);

  useEffect(() => {
    setLoading(true);

    axios.get(`${URL}/products`).then((response) => {
      const productsData = flattenProductsData(response.data);
      const featuredPoductsData = featuredProducts(productsData);

      setProducts(productsData);
      setFeatured(featuredPoductsData);
      setLoading(false);
    });

    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, featured, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
