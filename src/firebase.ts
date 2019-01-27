import firebase from "firebase";

export function initFirebase() {
  const config = {
    apiKey: "AIzaSyC0cFsCUU2S_MyGIA16p_J2PBwDa5Gxi5w",
    authDomain: "the-chat-d9454.firebaseapp.com",
    databaseURL: "https://the-chat-d9454.firebaseio.com",
    projectId: "the-chat-d9454",
    storageBucket: "the-chat-d9454.appspot.com",
    messagingSenderId: "513329153661"
  };

  firebase.initializeApp(config);
}
