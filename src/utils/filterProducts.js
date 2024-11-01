export const filterProducts = (products, filters) => {
    return products.filter(product => {
      const matchesCategory = filters.category ? product.category === filters.category : true;
      const matchesBrand = filters.brand ? product.brand === filters.brand : true;
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesRating = product.rating >= filters.rating;
      
      return matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });
};
  