import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtAbDYhWXwHJA8M2mZSyy014yqfznkMEU",
    authDomain: "the-heartless-bistro.firebaseapp.com",
    projectId: "the-heartless-bistro",
    storageBucket: "the-heartless-bistro.appspot.com",
    messagingSenderId: "65400135853",
    appId: "1:65400135853:web:86e780dc6699ba0e79e624",
    measurementId: "G-19K0N4QHBP"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export { app, analytics, firebase };