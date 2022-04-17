import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";

// import our reducers object (this has the values like selectedSong)
import reducers from "./reducers";

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
