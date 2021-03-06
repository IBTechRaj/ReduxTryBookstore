import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";
import CATEGORIES from "../utils/categories";
import PropTypes from "prop-types";

class BooksForm extends React.Component {
  state = {
    title: "",
    category: CATEGORIES[0]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    console.log("1", title, "2", category);
    if (title && category) {
      console.log("1", title, "2", category);
      createBook(title, category);
      this.setState({
        title: "",
        category: CATEGORIES[0]
      });
    }
  };

  render() {
    const { title, category } = this.state;
    // console.log("1", title, "2", category);
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select
            className="twenty-five"
            name="category"
            value={category}
            onChange={this.handleChange}
            id=""
          >
            <option defaultValue="">Choose a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit" onClick={this.handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    );
  }
}
BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired
};
export default connect(null, { createBook })(BooksForm);
