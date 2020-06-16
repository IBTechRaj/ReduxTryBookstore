import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import "./index.css";
import App from "./components/App.js";
import getId from "./utils/getId";

import * as serviceWorker from "./serviceWorker";

const initialState = {
  books: [
    { id: getId(), title: "First Flight", category: "History" },
    { id: getId(), title: "Second Choice", category: "Action" }
  ],
  filter: "All"
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
