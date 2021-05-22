import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyAJxlfWA4M-RGYMOYnE1dw48gzTnJRolDE",
    authDomain: "booksanta-18586.firebaseapp.com",
    projectId: "booksanta-18586",
    storageBucket: "booksanta-18586.appspot.com",
    messagingSenderId: "506809336394",
    appId: "1:506809336394:web:fa02880a3dfeaed71e1cb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();