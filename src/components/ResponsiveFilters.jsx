/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Filters from "./Filters";

const ResponsiveFilters = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('tesr');
  

  return (
    <div className="responsive-filters">
      <button onClick={() => setIsOpen(!isOpen)}>Filter</button>
      {isOpen && <Filters filters={filters} setFilters={setFilters} />}
    </div>
  );
};

export default ResponsiveFilters;
