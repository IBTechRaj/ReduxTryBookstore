import React from "react";
import PropTypes from "prop-types";
import CATEGORIES from "../utils/categories";

const CategoryFilter = ({ handleChange }) => {
  return (
    <div>
      <span>Choose the Category to view</span>
      <select
        // className="twenty-five"
        // name="category"
        // value={category}
        onChange={handleChange}
      >
        <option value="All">All</option>
        {CATEGORIES.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default CategoryFilter;
