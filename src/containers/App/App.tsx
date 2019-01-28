import React from "react";
import "./App.scss";
import { RootState, RootAction } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initializeApp, setAuthState } from "../../store/app/actions";
import LoginScreen from "../LoginScreen/LoginScreen";
import Button from "@material-ui/core/Button";
import firebase from "../../firebase";
import { User } from "../../common/models";

export interface AppStateProps {
  isAuthenticated: boolean;
  displayName?: string;
  avatarURL?: string;
}

export interface AppDispatchProps {
  initializeApp(): void;
  setAuthState(user: User): void;
}

export interface AppProps {}

function mapStateToProps(state: RootState): AppStateProps {
  return {
    isAuthenticated: state.app.isAuthenticated,
    displayName: state.app.displayName,
    avatarURL: state.app.avatarURL
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>): AppDispatchProps {
  return {
    initializeApp: () => dispatch(initializeApp()),
    setAuthState: user => dispatch(setAuthState(user))
  };
}

class App extends React.Component<AppProps & AppStateProps & AppDispatchProps> {
  public render() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <span>Welcome {this.props.displayName}</span>
          <Button onClick={this._handleSignOut}>Sign out</Button>
        </div>
      );
    } else {
      return (
        <div>
          <LoginScreen />
        </div>
      );
    }
  }

  private _handleSignOut: React.MouseEventHandler<HTMLElement> = ev => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.setAuthState({ isAuthenticated: false }));
  };
}

const appContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export { appContainer as App };
