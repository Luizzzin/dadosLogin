// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgXAl9EnZvIimPlJfeHlBBhpCgezHILsU",
    authDomain: "dadoslogin-c0a72.firebaseapp.com",
    projectId: "dadoslogin-c0a72",
    storageBucket: "dadoslogin-c0a72.appspot.com",
    messagingSenderId: "137045642924",
    appId: "1:137045642924:web:29a383a79c2473a10e9909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore };