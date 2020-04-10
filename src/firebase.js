import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyCHVnkQbxdOQb4wq8rcVhEHINkPLbwsXGA",
  authDomain: "autoform-e29b5.firebaseapp.com",
  databaseURL: "https://autoform-e29b5.firebaseio.com",
  projectId: "autoform-e29b5",
  storageBucket: "autoform-e29b5.appspot.com",
  messagingSenderId: "264304143712",
  appId: "1:264304143712:web:3269eee35c2301b09cc205"
});

const db = firebaseApp.firestore();

export { db };