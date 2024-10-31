/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { mockProducts } from "./data/mockProducts";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";

const ITEMS_PER_PAGE = 20;

const App = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filters, setFilters] = useState(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    return savedFilters || {
      category: "",
      brand: "",
      priceRange: [0, 500],
      rating: 0,
    };
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = filters.category ? product.category === filters.category : true;
      const matchesBrand = filters.brand ? product.brand === filters.brand : true;
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesRating = product.rating >= filters.rating;

      return matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });
  }, [filters, products]);

  // Calculate paginated products based on the current page
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [currentPage, filteredProducts]);

  // Total pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) setFilters(savedFilters);
  }, []);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app">
      <Filters filters={filters} setFilters={setFilters} />
      <ProductList products={paginatedProducts} />
      
      {/* Pagination control - only visible if there are more than 20 filtered products */}
      {filteredProducts.length > ITEMS_PER_PAGE && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              disabled={currentPage === page + 1}
            >
              {page + 1}
            </button>
          ))}
          
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default App;