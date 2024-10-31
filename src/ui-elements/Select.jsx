/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";

// const Select = ({ label, value, options, onChange }) => {
//   return (
//     <div className="select-container">
//       <label>{label}</label>
//       <select value={value || ""} onChange={onChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Select;

// Select.js
import React from "react";
import Select from "react-select";

const CustomSelect = ({ label, value, options, onChange }) => {
  return (
    <div className="select-container">
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
