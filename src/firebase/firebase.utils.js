import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhvOQxc_ppNyAhlvGYm9sJvVuZGkr8XG8",
    authDomain: "crwn-db-663c9.firebaseapp.com",
    databaseURL: "https://crwn-db-663c9.firebaseio.com",
    projectId: "crwn-db-663c9",
    storageBucket: "crwn-db-663c9.appspot.com",
    messagingSenderId: "588441517945",
    appId: "1:588441517945:web:25cc4421a43b1a982a39a8",
    measurementId: "G-VDFS4GZGQR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
export default firebase;