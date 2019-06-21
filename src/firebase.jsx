import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyBpcXR6v1K8zkdf4d16IrQMw2HeH2b-5J0",
    authDomain: "codaertcreative.firebaseapp.com",
    databaseURL: "https://codaertcreative.firebaseio.com",
    projectId: "codaertcreative",
    storageBucket: "codaertcreative.appspot.com"
};

firebase.initializeApp(config)

// const settings = {timestampsInSnapshots: true};
// firebase.firestore().settings(settings)

export default firebase