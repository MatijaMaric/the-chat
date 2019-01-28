import React from "react";
import "./App.scss";
import { RootState, RootAction } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initializeApp } from "../../store/app/actions";
import LoginScreen from "../LoginScreen/LoginScreen";

export interface AppStateProps {
  isAuthenticated: boolean;
}

export interface AppDispatchProps {
  initializeApp(): void;
}

export interface AppProps {}

function mapStateToProps(state: RootState): AppStateProps {
  return {
    isAuthenticated: state.app.isAuthenticated
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>): AppDispatchProps {
  return {
    initializeApp: () => dispatch(initializeApp())
  };
}

class App extends React.Component<AppProps & AppStateProps & AppDispatchProps> {
  public render() {
    const { isAuthenticated } = this.props;
    return <div className="App">{!isAuthenticated && <LoginScreen />}</div>;
  }
}

const appContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export { appContainer as App };
