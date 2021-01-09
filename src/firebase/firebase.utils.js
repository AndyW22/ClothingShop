import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBH_WNHH1WQs75pPBFe0PgeqVMiyszHmSk',
  authDomain: 'firstshop-e48ab.firebaseapp.com',
  projectId: 'firstshop-e48ab',
  storageBucket: 'firstshop-e48ab.appspot.com',
  messagingSenderId: '802996107863',
  appId: '1:802996107863:web:e123779a0fd65dd7004112',
  measurementId: 'G-Y6JKHRQPK6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
