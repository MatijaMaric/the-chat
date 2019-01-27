import * as firebase from "firebase/app";
import { result as config } from "./firebase-config.json";

firebase.initializeApp(config);

export default firebase;
