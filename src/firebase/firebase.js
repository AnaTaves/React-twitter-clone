import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNIqUlCA3wBxuXaYTdQ9IhALfp7ZQvJk4",

  authDomain: "twitter-clone-b1b67.firebaseapp.com",

  projectId: "twitter-clone-b1b67",

  storageBucket: "twitter-clone-b1b67.appspot.com",

  messagingSenderId: "460880866161",

  appId: "1:460880866161:web:7ffac025728f7a359fe4d0",

  measurementId: "G-35VPCD3DGV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
export default firebase;
