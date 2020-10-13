import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVCRgn2DoBwQ0fUc9w9ooaQPF66QrLvI0",
    authDomain: "chatting-app-eb4b7.firebaseapp.com",
    databaseURL: "https://chatting-app-eb4b7.firebaseio.com",
    projectId: "chatting-app-eb4b7",
    storageBucket: "chatting-app-eb4b7.appspot.com",
    messagingSenderId: "644714112213",
    appId: "1:644714112213:web:a4049bb2dfb6d8ab03ae5c",
    measurementId: "G-N70275HSX9"
})

const db = firebaseApp.firestore();

export default db;