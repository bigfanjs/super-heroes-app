import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./App";
import Superseroes from "./reducers";
import {loadState, saveState} from "./local-storage";

const
  persistedState = loadState(),
  store = createStore(Superseroes, persistedState);

store.subscribe(() => {
  saveState({
    heroes: store.getState().heroes
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);