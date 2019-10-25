import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAopjKuSPBCNFZhvv_1Nst9X4ug46drqDc",
    authDomain: "softdev-2019-crowndb.firebaseapp.com",
    databaseURL: "https://softdev-2019-crowndb.firebaseio.com",
    projectId: "softdev-2019-crowndb",
    storageBucket: "softdev-2019-crowndb.appspot.com",
    messagingSenderId: "801484997028",
    appId: "1:801484997028:web:f6b041a9a902df2d510131",
    measurementId: "G-9XQ3VV6TFC"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;