import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5bFKd4y6AovmoItaK6rgfdJqIdyLLC7k",
    authDomain: "crwn-db-a2840.firebaseapp.com",
    projectId: "crwn-db-a2840",
    storageBucket: "crwn-db-a2840.appspot.com",
    messagingSenderId: "688982840037",
    appId: "1:688982840037:web:e71ef7f975c3492899fa0c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;