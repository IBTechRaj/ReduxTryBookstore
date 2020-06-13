const books = (state = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          category: action.category
        }
      ];
    case "REMOVE_BOOK":
      // return state.map(book => (book.id === action.id ? { ...book } : todo));
      return state.map(book => ({ ...book }));
    default:
      return state;
  }
};

export default books;
