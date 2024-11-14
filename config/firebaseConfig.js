
const { initializeApp } = require('firebase/app');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKufzi1H20M7ruxz1YwC5yFPApItv2Yiw",
  authDomain: "abc-stevedoring.firebaseapp.com",
  projectId: "abc-stevedoring",
  storageBucket: "abc-stevedoring.firebasestorage.app",
  messagingSenderId: "404631990029",
  appId: "1:404631990029:web:5f01a0b32013d3bc0bca44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);