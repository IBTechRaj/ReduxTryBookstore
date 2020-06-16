import getId from "../utils/getId";

// let nextBookId = 0;
// defihning actions createBook and deleteBook
// addBook will be used by Reducers/book.js
export const createBook = (title, category) => ({
  type: "CREATE_BOOK",
  id: getId(),
  title,
  category
});

export const removeBook = id => ({
  type: "REMOVE_BOOK",
  id
});

// export const setCategoryFilter = filter => ({
//   type: "SET_CATEGORY_FILTER",
//   filter
// });

export const changeFilter = filter => ({
  type: "CHANGE_FILTER",
  filter
});

// export const ChangeFilter = {
//   ACTION: "ACTION",
//   BIOGRAPHY: "BIOGRAPHY",
//   HISTORY: "HISTORY",
//   HORROR: "HORROR",
//   KIDS: "KIDS",
//   LEARNING: "LEARNING",
//   SCIFI: "SCIFI",
//   ALL: "ALL"
// };
