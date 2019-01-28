import firebase from "firebase/app";
import "firebase/auth";
import { result as config } from "./firebase-config.json";

firebase.initializeApp(config);
console.log(firebase.SDK_VERSION);

export default firebase;
