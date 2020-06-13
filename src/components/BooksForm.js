import React from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";

const AddBook = ({ dispatch }) => {
  let input;
  let category;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addBook(input.value, category.value));
          console.log(input.value, category.value);
          input.value = "";
          category.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <input ref={node => (category = node)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default connect()(AddBook);
