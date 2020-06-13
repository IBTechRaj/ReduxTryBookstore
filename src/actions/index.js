let nextBookId = 0;
// defihning actions createBook and deleteBook
// addBook will be used by Reducers/book.js
export const addBook = (title, category) => ({
  type: "CREATE_BOOK",
  id: nextBookId++,
  title,
  category
});

export const deleteBook = title => ({
  type: "REMOVE_BOOK"
});

export const setCategoryFilter = filter => ({
  type: "SET_CATEGORY_FILTER",
  filter
});

export const CategoryFilters = {
  ACTION: "ACTION",
  BIOGRAPHY: "BIOGRAPHY",
  HISTORY: "HISTORY",
  HORROR: "HORROR",
  KIDS: "KIDS",
  LEARNING: "LEARNING",
  SCIFI: "SCIFI",
  ALL: "ALL"
};
