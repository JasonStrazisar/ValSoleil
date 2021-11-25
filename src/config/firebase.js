import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyC6naekl87pGv5S4_gWvpcFI_YKrZb0H_s",
    authDomain: "restaurant-le-valsoleil.firebaseapp.com",
    databaseURL: "https://restaurant-le-valsoleil.firebaseio.com",
    projectId: "restaurant-le-valsoleil",
    storageBucket: "restaurant-le-valsoleil.appspot.com",
    messagingSenderId: "21450050682",
    appId: "1:21450050682:web:34a480e19f382b817b7fc3",
    measurementId: "G-X7JJZ08WMB"
})

export const database = getFirestore();