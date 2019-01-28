import React from "react";
import "./App.css";
import { RootState, RootAction } from "./store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initializeApp } from "./store/app/actions";

export interface AppStateProps {
  test: string;
}

export interface AppDispatchProps {
  initializeApp(): void;
}

export interface AppProps {}

function mapStateToProps(state: RootState): AppStateProps {
  return {
    test: state.app.test
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>): AppDispatchProps {
  return {
    initializeApp: () => dispatch(initializeApp())
  };
}

class App extends React.Component<AppProps & AppStateProps & AppDispatchProps> {
  render() {
    return (
      <div className="App" onClick={this.props.initializeApp}>
        {this.props.test}
      </div>
    );
  }
}

const appContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export { appContainer as App };
