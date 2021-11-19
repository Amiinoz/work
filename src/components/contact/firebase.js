import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBZcwl8RM1NGcKYr0yEyz7QEDu67RMacMo',
  authDomain: 'reactform-f5801.firebaseapp.com',
  databaseURL: 'https://reactform-f5801.firebaseio.com',
  projectId: 'reactform-f5801',
  storageBucket: 'reactform-f5801.appspot.com',
  messagingSenderId: '565625166504',
  appId: '1:565625166504:web:4af7e6ec1c59c86cdac09d',
});

var db = firebaseApp.firestore();
export { db };
