/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBxP8-0Ilaa2RKihnNAec48V0vfjd04q58",
//   authDomain: "todo-app-fb4a3.firebaseapp.com",
//   databaseURL: "https://todo-app-fb4a3.firebaseio.com",
//   projectId: "todo-app-fb4a3",
//   storageBucket: "todo-app-fb4a3.appspot.com",
//   messagingSenderId: "938070930012",
//   appId: "1:938070930012:web:3e044922ada2ac04af6c99",
//   measurementId: "G-PDY4J8M36P",
// };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxP8-0Ilaa2RKihnNAec48V0vfjd04q58",
  authDomain: "todo-app-fb4a3.firebaseapp.com",
  databaseURL: "https://todo-app-fb4a3.firebaseio.com",
  projectId: "todo-app-fb4a3",
  storageBucket: "todo-app-fb4a3.appspot.com",
  messagingSenderId: "938070930012",
  appId: "1:938070930012:web:3e044922ada2ac04af6c99",
  measurementId: "G-PDY4J8M36P",
});

const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
