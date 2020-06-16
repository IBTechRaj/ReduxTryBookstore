import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { connect } from "react-redux";
import { removeBook, changeFilter } from "../actions";
import CategoryFilter from "../components/Filter.js";

function mapStateToProps(state) {
  const { books, filter } = state;
  console.log("b", books, "f", filter);
  return { books, filter };
}
// const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),

  removeBook: id => dispatch(removeBook(id))
});
// console.log(BooksList);

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    console.log("f", filter);
    changeFilter(value);
  };
  const filteredBooks = () =>
    filter === "All" ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      <div>
        {/* console.log(filteredBooks()) */}
        {filteredBooks().map(book => (
          // <Book key={book.id} {...book} />
          <Book
            key={book.id}
            book={book}
            // title={book.title}
            // category={book.category}
            removeBook={removeBook}
          />
        ))}
      </div>
    </div>
  );
};

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
