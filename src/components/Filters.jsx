import React from "react";
import CustomSelect from "../ui-elements/Select";

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
    <div >
      <CustomSelect
        label="Category"
        value={filters.category}
        options={categoryOption}
        onChange={(value) => handleFilterChange("category", value)}
        className="p-1"
      />

      <CustomSelect
        label="Brand"
        value={filters.brand}
        options={filterOption}
        onChange={(value) => handleFilterChange("brand", value)}
        className='p-1'
      />

      <div className="d-flex align-center">
        <div className="p-1 d-flex flex-column col-6">
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="500"
            value={filters.priceRange ? filters.priceRange[1] : 500}
            onChange={e => handleFilterChange("priceRange", [0, e.target.valueAsNumber])}
            className="p-1"
          />
        </div>
        
        <div className="p-1 d-flex flex-column col-6">
          <label className="d-block">Rating</label>
          <input
            type="number"
            min="0"
            max="5"
            value={filters.rating ?? ""}
            onChange={e => handleFilterChange("rating", e.target.valueAsNumber || '')}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Filters;
