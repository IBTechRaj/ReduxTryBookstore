import React from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";
import CATEGORIES from "../utils/categories";

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
        {/* <input ref={node => (input = node)} />
        <input ref={node => (category = node)} /> */}
        <input
          type="text"
          name="title"
          // value={title}
          // onChange={this.handleChange}
          placeholder="Book Title"
        />
        <select
          className="twenty-five"
          name="category"
          value={category}
          // onChange={this.handleChange}
          id=""
        >
          <option defaultValue="">Choose a category</option>
          {CATEGORIES.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default connect()(AddBook);
