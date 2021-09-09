import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpRgh7OMmFgKmTGmKwH7LAtuSxzAHV9cg',
  authDomain: 'online-voting-9e8d0.firebaseapp.com',
  projectId: 'online-voting-9e8d0',
  storageBucket: 'online-voting-9e8d0.appspot.com',
  messagingSenderId: '609146185377',
  appId: '1:609146185377:web:3acb393f64c98a26a172e0',
  measurementId: 'G-9JFQ1S9XDG',
};


firebase.initializeApp (firebaseConfig);


const auth = firebase.auth ();
const db = firebase.firestore ();
const storage = firebase.storage ();

export  {auth, db, storage}
