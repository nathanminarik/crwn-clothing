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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return false;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            }) 
        } catch (error) {
            console.log(`Error creating user: ${error}`)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((acc, col) => {
        acc[col.title.toLowerCase()] = col
        return acc
    }, {});
}
 
export default firebase;