import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { books } = state;
  console.log(books);
  return { books };
}
// console.log(BooksList);

const BooksList = ({ books }) => (
  <ul>
    {books.map((book, index) => (
      <Book key={book.id} {...book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
  // toggleTodo: PropTypes.func.isRequired
};

// export default BooksList;
export default connect(mapStateToProps)(BooksList);
