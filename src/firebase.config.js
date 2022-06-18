// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7_FiarPrLtdvGR80ihNyBQspKIe1sffg",
  authDomain: "rpg-note.firebaseapp.com",
  databaseURL:
    "https://rpg-note-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rpg-note",
  storageBucket: "rpg-note.appspot.com",
  messagingSenderId: "809157126768",
  appId: "1:809157126768:web:9cd28c03eff1bf077222b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
