import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAREnj0RVHcDSv5VMJIhFuo_WxmK2E2EcA",
    authDomain: "instagram-clone-react-13684.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-13684.firebaseio.com",
    projectId: "instagram-clone-react-13684",
    storageBucket: "instagram-clone-react-13684.appspot.com",
    messagingSenderId: "232993867107",
    appId: "1:232993867107:web:7fb89a87c617c9b5ee3f56",
    measurementId: "G-XRJGWC76Y2"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };