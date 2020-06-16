import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { connect } from "react-redux";
import { removeBook } from "../actions";

function mapStateToProps(state) {
  const { books } = state;
  // console.log(books);
  return { books };
}

const mapDispatchToProps = dispatch => ({
  // changeFilter: value => dispatch(changeFilter(value)),

  removeBook: id => dispatch(removeBook(id))
});
// console.log(BooksList);

const BooksList = ({ books, removeBook }) => (
  <ul>
    {books.map((book, id) => (
      // <Book key={book.id} {...book} />
      <Book
        key={book.id}
        book={book}
        // title={book.title}
        // category={book.category}
        removeBook={removeBook}
      />
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
  ).isRequired,
  removeBook: PropTypes.func.isRequired
  // toggleTodo: PropTypes.func.isRequired
};

// export default BooksList;
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
