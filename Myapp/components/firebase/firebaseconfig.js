import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeB7ayApDoxMHVFIdAiMzHgtl795vFoXg",
  authDomain: "mobileproject-9ee4a.firebaseapp.com",
  projectId: "mobileproject-9ee4a",
  storageBucket: "mobileproject-9ee4a.appspot.com",
  messagingSenderId: "776060697989",
  appId: "1:776060697989:web:3d6fb4322084e6c60458ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app};