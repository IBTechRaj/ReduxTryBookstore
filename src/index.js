import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App.js";
import getId from "./utils/getId";

import * as serviceWorker from "./serviceWorker";

const initialState = {
  books: [
    { id: getId(), title: "First Flight", category: "HISTORY" },
    { id: getId(), title: "Second Choice", category: "ACTION" }
  ]
};
const store = createStore(rootReducer, initialState);

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
