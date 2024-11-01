import React, { useState, useMemo } from "react";
import { mockProducts } from "./data/mockProducts";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { filterProducts } from "./utils/filterProducts";
import { paginateProducts } from "./utils/paginateProducts";
import './App.scss'

const ITEMS_PER_PAGE = 12;

const App = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: [0, 500],
    rating: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize filtered products to prevent unnecessary calculations
  const filteredProducts = useMemo(() => filterProducts(mockProducts, filters), [filters]);

  // Memoize paginated products based on filtered products and current page
  const paginatedProducts = useMemo(
    () => paginateProducts(filteredProducts, currentPage, ITEMS_PER_PAGE),
    [filteredProducts, currentPage]
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-12">
      <div className="mx-auto col-md-8 col-12 p-2">
        <Filters filters={filters} setFilters={setFilters} />
        <ProductList products={paginatedProducts} />
        {filteredProducts.length > ITEMS_PER_PAGE && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
