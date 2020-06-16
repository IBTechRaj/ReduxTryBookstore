import { combineReducers } from "redux";
import books from "./books";
import filter from "./filter";
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  books,
  filter
});
