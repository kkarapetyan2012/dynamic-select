import React from "react";
import { createCSSClass } from "../utils/jsxHelpers";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Generate page numbers dynamically */}
      {[...Array(totalPages).keys()].map((page) => {
        const pageNumber = page + 1;
        // Create the className dynamically using createCSSClass
        const className = createCSSClass(
          ["pagination-button"], // Static classes
          { active: currentPage === pageNumber } // Dynamic class: 'active' if it's the current page
        );

        return (
          <button
            key={pageNumber}
            className={className}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        );
      })}

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
