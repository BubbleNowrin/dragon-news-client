// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIXpgB1KNKEJ94Nan0d-VSwSGAanCZQQQ",
    authDomain: "dragon-news-client-eb5ab.firebaseapp.com",
    projectId: "dragon-news-client-eb5ab",
    storageBucket: "dragon-news-client-eb5ab.appspot.com",
    messagingSenderId: "66032015740",
    appId: "1:66032015740:web:9939ccc80aa311bad36cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;