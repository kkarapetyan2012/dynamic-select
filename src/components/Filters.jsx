/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import React from "react";
// import Select from "../ui-elements/Select";

// const categoryOption = [
//     { value: "", label: "All" },
//     { value: "Electronics", label: "Electronics" },
//     { value: "Footwear", label: "Footwear" },
//     { value: "Clothing", label: "Clothing" }
// ]

// const filterOption = [
//     { value: "", label: "All" },
//     { value: "Brand A", label: "Brand A" },
//     { value: "Brand B", label: "Brand B" },
//     { value: "Brand C", label: "Brand C" },
//     { value: "Brand D", label: "Brand D" },
//     { value: "Brand E", label: "Brand E" }
// ]

// const Filters = ({ filters, setFilters }) => {
//   const handleFilterChange = (name, value) => {
//     setFilters(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="filters">
//       <Select
//         label="Category"
//         value={filters.category}
//         options={categoryOption}
//         onChange={e => handleFilterChange("category", e.target.value)}
//       />

//       <Select
//         label="Brand"
//         value={filters.brand}
//         options={filterOption}
//         onChange={e => handleFilterChange("brand", e.target.value)}
//       />

//       <label>Price Range</label>
//       <input
//         type="range"
//         min="0"
//         max="500"
//         value={filters.priceRange ? filters.priceRange[1] : 500}
//         onChange={e => handleFilterChange("priceRange", [0, e.target.valueAsNumber])}
//       />

//       <label>Rating</label>
//       <input
//         type="number"
//         min="1"
//         max="5"
//         value={filters.rating ?? ""}
//         onChange={e => handleFilterChange("rating", e.target.valueAsNumber || '')}
//       />
//     </div>
//   );
// };

// export default Filters;

import React from "react";
import CustomSelect from "../ui-elements/Select";
import '../scss/Filters.scss';

const categoryOption = [
    { value: "", label: "All" },
    { value: "Electronics", label: "Electronics" },
    { value: "Footwear", label: "Footwear" },
    { value: "Clothing", label: "Clothing" }
]

const filterOption = [
    { value: "", label: "All" },
    { value: "Brand A", label: "Brand A" },
    { value: "Brand B", label: "Brand B" },
    { value: "Brand C", label: "Brand C" },
    { value: "Brand D", label: "Brand D" },
    { value: "Brand E", label: "Brand E" }
]

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filters">
      <CustomSelect
        label="Category"
        value={filters.category}
        options={categoryOption}
        onChange={(value) => handleFilterChange("category", value)}
      />

      <CustomSelect
        label="Brand"
        value={filters.brand}
        options={filterOption}
        onChange={(value) => handleFilterChange("brand", value)}
      />

      <label>Price Range</label>
      <input
        type="range"
        min="0"
        max="500"
        value={filters.priceRange ? filters.priceRange[1] : 500}
        onChange={e => handleFilterChange("priceRange", [0, e.target.valueAsNumber])}
      />

      <label>Rating</label>
      <input
        type="number"
        min="0"
        max="5"
        value={filters.rating ?? ""}
        onChange={e => handleFilterChange("rating", e.target.valueAsNumber || '')}
      />
    </div>
  );
};

export default Filters;
