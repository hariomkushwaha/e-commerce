import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyA6928N2fDL8Ps2a6I8qgotaUnchA-zOgc",
        authDomain: "e-commerce-db-d9dca.firebaseapp.com",
        databaseURL: "https://e-commerce-db-d9dca.firebaseio.com",
        projectId: "e-commerce-db-d9dca",
        storageBucket: "e-commerce-db-d9dca.appspot.com",
        messagingSenderId: "336607645863",
        appId: "1:336607645863:web:db5ce46fed26390ec10b82",
        measurementId: "G-499XTJC5KM"
      }; 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

