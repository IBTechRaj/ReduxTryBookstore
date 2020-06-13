import React from "react";
import PropTypes from "prop-types";

const Book = ({ id, title, category }) => (
  <li
  // onClick={onClick}
  // style={{
  //   textDecoration: completed ? "line-through" : "none"
  // }}
  >
    {id}
    {title}
    {category}
  </li>
);

Book.propTypes = {
  // onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Book;
