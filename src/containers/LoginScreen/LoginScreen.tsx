import React, { useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { emailRegex } from "../../common/regex";

import "./LoginScreen.scss";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase";
import Button from "@material-ui/core/Button";

export interface LoginScreenProps {}

export interface LoginScreenState {
  isSignedIn: boolean;
}

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  private unregisterAuthObserver: firebase.Unsubscribe = () => null;

  public constructor(props: LoginScreenProps) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  public componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
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
        signInSuccessWithAuthResult: () => false
      }
    };
    if (!this.state.isSignedIn) {
      return (
        <div className="LoginScreen">
          <StyledFirebaseAuth
            uiCallback={ui => ui.disableAutoSignIn()}
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }

    const currentUser = firebase.auth().currentUser;
    const displayName = currentUser && currentUser.displayName;

    return (
      <div>
        <p>Welcome {displayName} !</p>

        <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
      </div>
    );
  }
}

export default LoginScreen;
