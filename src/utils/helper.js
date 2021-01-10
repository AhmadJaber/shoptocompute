// flatten products data
export function flattenProductsData(products) {
  return products.map((product) => {
    const images = product.images.reduce((accm, image) => {
      const imageMain = image.url;
      const imageSmall = image.formats.small.url;
      return [...accm, { imageMain, imageSmall }];
    }, []);

    return { ...product, images };
  });
}

// get featured products
export function featuredProducts(products) {
  return products.filter((product) => product.featured === true);
}
