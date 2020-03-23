
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTzZDQhqsoGPPNvJo2A8ibUB3YqvT-kVU",
    authDomain: "test-project-8e370.firebaseapp.com",
    databaseURL: "https://test-project-8e370.firebaseio.com",
    projectId: "test-project-8e370",
    storageBucket: "test-project-8e370.appspot.com",
    messagingSenderId: "314126635978",
    appId: "1:314126635978:web:e989813a4d1807821e3533",
    measurementId: "G-1H88E6XQEF"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
