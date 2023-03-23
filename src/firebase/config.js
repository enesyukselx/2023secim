import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBUkfzcZmnKEZhSJGPCc6tTmPLXkEfjhjI",
    authDomain: "secim2023-6503f.firebaseapp.com",
    projectId: "secim2023-6503f",
    storageBucket: "secim2023-6503f.appspot.com",
    messagingSenderId: "707391371896",
    appId: "1:707391371896:web:6dd3783abc5c7a84d04b8d",
    measurementId: "G-0ZF4JXQSQD",
};

let firebase_app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
