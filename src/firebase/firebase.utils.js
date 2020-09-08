import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCFOysV8bne58G3HbZ7Tv1sAkKDVjxMfU8',
  authDomain: 'crwn-db-da9e5.firebaseapp.com',
  databaseURL: 'https://crwn-db-da9e5.firebaseio.com',
  projectId: 'crwn-db-da9e5',
  storageBucket: 'crwn-db-da9e5.appspot.com',
  messagingSenderId: '312821905369',
  appId: '1:312821905369:web:2faeec9855c620628b8bc8',
  measurementId: 'G-DBKY4ZWM7Y'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
