import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from "./App";
import Superseroes from "./reducers";
import {loadState, saveState} from "./local-storage";

import "./index.css";

injectTapEventPlugin();

const
  persistedState = loadState(),
  store = createStore(Superseroes, persistedState);

store.subscribe(() => {
  saveState({
    heroes: store.getState().heroes
  });
});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);