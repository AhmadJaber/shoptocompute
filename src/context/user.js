import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../utils/url';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`${URL}/products`).then((response) => {
      const productsData = response.data;
      setProducts(productsData);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, featured, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
