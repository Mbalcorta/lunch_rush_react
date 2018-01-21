import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAs2R09n1mNLYLH73PEz63kOEUmIqCl1Tk',
  authDomain: 'lunch-rush-51919.firebaseapp.com',
  databaseURL: 'https://lunch-rush-51919.firebaseio.com',
  projectId: 'lunch-rush-51919',
  storageBucket: 'lunch-rush-51919.appspot.com',
  messagingSenderId: '348165731072'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
