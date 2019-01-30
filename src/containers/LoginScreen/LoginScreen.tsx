import React from "react";

import "./LoginScreen.scss";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase";
import { Dispatch } from "redux";
import { RootAction } from "../../store";
import { setAuthState } from "../../store/app/actions";
import { User } from "../../common/models";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface LoginScreenProps {}
export interface LoginScreenState {
  isLoading: boolean;
}

export interface LoginScreenDispatchProps {
  setAuthState(user: User): void;
}

function mapDispatchToProps(
  dispatch: Dispatch<RootAction>
): LoginScreenDispatchProps {
  return {
    setAuthState: user => dispatch(setAuthState(user))
  };
}

class LoginScreen extends React.Component<
  LoginScreenProps & LoginScreenDispatchProps,
  LoginScreenState
> {
  private unregisterAuthObserver: firebase.Unsubscribe = () => null;

  public constructor(props: LoginScreenProps & LoginScreenDispatchProps) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  public componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this._handleAuthChanged(user));
  }

  private _handleAuthChanged(user: firebase.User | null): void {
    if (user) {
      this.props.setAuthState({
        isAuthenticated: true,
        displayName: user.displayName || undefined,
        photoURL: user.photoURL || undefined
      });
    }
  }

  public componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  public render() {
    const uiConfig = {
      signInFLow: "popup",
      signInSuccessUrl: "/signedIn",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
        uiShown: () => {
          this.setState({ isLoading: false });
        }
      }
    };
    return (
      <div className="LoginScreen">
        <Card>
          <Typography
            variant="h5"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Sign in
          </Typography>
          {this.state.isLoading && (
            <CircularProgress
              color="secondary"
              style={{
                margin: "20px 0 20px 0",
                position: "relative",
                left: "calc(50% - 20px)"
              }}
            />
          )}
          <StyledFirebaseAuth
            uiCallback={ui => ui.disableAutoSignIn()}
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Card>
      </div>
    );
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(LoginScreen);
