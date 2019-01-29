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
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withTheme } from "@material-ui/core";

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
    return (
      <div className="App">
        {this._renderAppBar()}
        {!this.props.isAuthenticated && <LoginScreen />}
      </div>
    );
  }

  private _renderAppBar(): React.ReactNode {
    return (
      <AppBar position="static">
        <Toolbar className="Toolbar">
          <div style={{ flexGrow: 1 }} />
          {this._renderUserInfo()}
        </Toolbar>
      </AppBar>
    );
  }

  private _renderUserInfo(): React.ReactNode {
    if (this.props.isAuthenticated) {
      return (
        <>
          <Typography color="inherit" variant="button">
            {this.props.displayName}
          </Typography>
          <Avatar src={this.props.avatarURL} />
          <Button color="inherit" onClick={this._handleSignOut}>
            Sign out
          </Button>
        </>
      );
    }
    return null;
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
)(withTheme()(App));
export { appContainer as App };
