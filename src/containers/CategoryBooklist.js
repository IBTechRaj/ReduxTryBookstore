import { connect } from "react-redux";
// import { toggleTodo } from '../actions'
import BooksList from "../components/BooksList";
// import { CategoryFilters } from "../actions";

// const getCategoryBooks = (books, filter) => {
//   switch (filter) {
//     case CategoryFilters.ALL:
//       return books;
//     case CategoryFilters.ACTION:
//       return books.filter(b => b.category === "ACTION");
//     default:
//       console.log("error");
//       throw new Error("Unknown filter: ");
//   }
// };

// const mapStateToProps = state => ({
//   books: getCategoryBooks(state.books, state.categoryFilter)
// });

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// });

function mapStateToProps(state) {
  const { books } = state;
  console.log(books);
  return { books };
}
// console.log(BooksList);
export default connect(mapStateToProps)(BooksList);
