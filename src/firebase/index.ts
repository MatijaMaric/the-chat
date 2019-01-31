import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { result as config } from "../firebase-config.json";

firebase.initializeApp(config);

export default firebase;
