import React from "react";

import firebase from "../../firebase";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { User } from "../../common/models";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { RootState, RootAction } from "../../store";
import { Dispatch } from "redux";
import { setAuthState } from "../../store/app/actions";
import { setThemeOptions } from "../../store/theme/actions";
import { connect } from "react-redux";
import { DarkTheme } from "../../themes/dark";
import { LightTheme } from "../../themes/light";

export interface HeaderState {
  darkTheme: boolean;
}

export interface HeaderStateProps {
  isAuthenticated: boolean;
  displayName?: string;
  avatarURL?: string;
}

export interface HeaderDispatchProps {
  setAuthState(user: User): void;
  setThemeOptions(theme: ThemeOptions): void;
}

function mapStateToProps(state: RootState): HeaderStateProps {
  return {
    isAuthenticated: state.app.isAuthenticated,
    displayName: state.app.displayName,
    avatarURL: state.app.avatarURL
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<RootAction>
): HeaderDispatchProps {
  return {
    setAuthState: user => dispatch(setAuthState(user)),
    setThemeOptions: theme => dispatch(setThemeOptions(theme))
  };
}

class Header extends React.Component<
  HeaderStateProps & HeaderDispatchProps,
  HeaderState
> {
  public constructor(props: HeaderStateProps & HeaderDispatchProps) {
    super(props);

    this.state = {
      darkTheme: true
    };
  }

  public render() {
    return (
      <AppBar position="static">
        <Toolbar className="Toolbar">
          <Switch
            checked={this.state.darkTheme}
            onChange={this._handleToggleTheme}
          />
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

  private _handleToggleTheme: React.ChangeEventHandler<
    HTMLInputElement
  > = ev => {
    const isDarkTheme = ev.currentTarget.checked;
    this.setState({ darkTheme: isDarkTheme });
    this.props.setThemeOptions(isDarkTheme ? DarkTheme : LightTheme);
  };

  private _handleSignOut: React.MouseEventHandler<HTMLElement> = ev => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.setAuthState({ isAuthenticated: false }));
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
