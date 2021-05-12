import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  //petHelp
  apiKey: 'AIzaSyCic0AoFVDgMjdo2On8LuitQy-lD9eVKos',
  authDomain: 'pethelp-cba43.firebaseapp.com',
  projectId: 'pethelp-cba43',
  storageBucket: 'pethelp-cba43.appspot.com',
  messagingSenderId: '708720825673',
  appId: '1:708720825673:web:cc5a5a9d915f4a04b0b698',
  //pethelp/petpet
  // apiKey: 'AIzaSyCZI7-C3NvatIIeKFM_PzHafH1kY8qP6L8',
  // authDomain: 'pethelp-9077d.firebaseapp.com',
  // projectId: 'pethelp-9077d',
  // storageBucket: 'pethelp-9077d.appspot.com',
  // messagingSenderId: '893416852947',
  // appId: '1:893416852947:web:0a3a703e9fc4df092d3326',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
