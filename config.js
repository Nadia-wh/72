import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCd9byDB6tF5hdk2zOAUT3D4uAbEgGFbdc",
  authDomain: "wily-40496.firebaseapp.com",
  databaseURL: "https://wily-40496-default-rtdb.firebaseio.com",
  projectId: "wily-40496",
  storageBucket: "wily-40496.appspot.com",
  messagingSenderId: "886009258382",
  appId: "1:886009258382:web:d000e94944ee84f78544df"
};

//if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
//}
export default firebase.firestore();