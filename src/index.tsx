import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import configureStore from "./store/configureStore";
import ConnectedMuiThemeProvider from "./containers/ConnectedMuiThemeProvider/ConnectedMuiThemeProvider";
import App from "./containers/App/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMuiThemeProvider>
      <CssBaseline />
      <App />
    </ConnectedMuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
