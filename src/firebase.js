
import  firebase  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmMgQ1xIXbI6Xv5Y2osX7EoyEVpscVnxM",
  authDomain: "cinnamon-2021-2b232.firebaseapp.com",
  projectId: "cinnamon-2021-2b232",
  storageBucket: "cinnamon-2021-2b232.appspot.com",
  messagingSenderId: "1056717618596",
  appId: "1:1056717618596:web:d82a75bca6d035324cd531"
};


const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)