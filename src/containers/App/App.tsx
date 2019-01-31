import React from "react";
import "./App.scss";
import { RootState, RootAction } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initializeApp } from "../../store/app/actions";
import LoginScreen from "../LoginScreen/LoginScreen";
import { withTheme } from "@material-ui/core";
import Header from "../Header/Header";
import Chat from "../Chat/Chat";

export interface AppStateProps {
  isAuthenticated: boolean;
}

export interface AppDispatchProps {
  initializeApp(): void;
}

export interface AppProps {}

export interface AppState {
  darkTheme: boolean;
}

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

class App extends React.Component<
  AppProps & AppStateProps & AppDispatchProps,
  AppState
> {
  public componentDidMount() {
    this.props.initializeApp();
  }

  public render() {
    return (
      <div className="App">
        <Header />
        {!this.props.isAuthenticated ? <LoginScreen /> : <Chat />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme()(App));
