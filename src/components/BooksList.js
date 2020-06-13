import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksList = ({ books }) => (
  <ul>
    {books.map(
      (book, index) => (
        <Book key={book.id} {...book} />
      )

      // <Book key={book.id} {...book} onClick={() => toggleTodo(todo.id)} />
    )}
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

export default BooksList;
