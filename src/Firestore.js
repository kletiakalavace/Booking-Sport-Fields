import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAq_tWrDis2RSOqXr7I9of2-CIfWvZYvwM",
    authDomain: "react-bookingsports.firebaseapp.com",
    databaseURL: "https://react-bookingsports.firebaseio.com",
    projectId: "react-bookingsports",
    storageBucket: "react-bookingsports.appspot.com",
    messagingSenderId: "857599666965",
    appId: "1:857599666965:web:5437328cb687298979571c",
    measurementId: "G-8T8XXKZWWP"
  });
  
  const db = firebaseApp.firestore();
  
  export { db };
