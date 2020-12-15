import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDxWGyLHtPgSnaaE-dQn2s-QbFOkuAAT7A',
  authDomain: 'mapnews-af2a4.firebaseapp.com',
  projectId: 'mapnews-af2a4',
  storageBucket: 'mapnews-af2a4.appspot.com',
  messagingSenderId: '61217071431',
  appId: '1:61217071431:web:2e84869be56dbb3a4cec62',
  measurementId: 'G-YBQXS9KVC0',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;
