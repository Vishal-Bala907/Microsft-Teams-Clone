// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD_kfo6yVSP7cfnX8mL-d80yN8qLbex0ZY",
//   authDomain: "teams-836f3.firebaseapp.com",
//   projectId: "teams-836f3",
//   storageBucket: "teams-836f3.appspot.com",
//   messagingSenderId: "275767148144",
//   appId: "1:275767148144:web:75700b5a5d5cb299327eb5",
// };
const firebaseConfig = {
  apiKey: "AIzaSyD_kfo6yVSP7cfnX8mL-d80yN8qLbex0ZY",
  authDomain: "teams-836f3.firebaseapp.com",
  databaseURL: "https://teams-836f3-default-rtdb.firebaseio.com",
  projectId: "teams-836f3",
  storageBucket: "teams-836f3.appspot.com",
  messagingSenderId: "275767148144",
  appId: "1:275767148144:web:48bb09da4edd3787327eb5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
