import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALuvcCdUoFC9t-EdlFowhfzQKaZYSbgKo",
  authDomain: "proyecto-marketplace-fadb5.firebaseapp.com",
  projectId: "proyecto-marketplace-fadb5",
  storageBucket: "proyecto-marketplace-fadb5.firebasestorage.app",
  messagingSenderId: "1076957455517",
  appId: "1:1076957455517:web:cd91261468ea645ef12074"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const createFirebaseApp =()=>{
    initializeApp(firebaseConfig);
}