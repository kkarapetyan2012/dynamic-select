import React from "react";
import Select from "react-select";

const CustomSelect = ({ label, value, options, onChange }) => {
  return (
    <div className="mt-2">
      <label>{label}</label>
      <Select
        value={options.find(option => option.value === value)} // Find the selected option
        options={options} // Pass options directly to react-select
        onChange={selectedOption => onChange(selectedOption.value)} // Pass selected value back
        isClearable
      />
    </div>
  );
};

export default CustomSelect;
