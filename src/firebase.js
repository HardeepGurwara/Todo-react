import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: "",
    authDomain: "todo-app-8ddbc.firebaseapp.com",
    databaseURL: "https://todo-app-8ddbc.firebaseio.com",
    projectId: "todo-app-8ddbc",
    storageBucket: "todo-app-8ddbc.appspot.com",
    messagingSenderId: "541109517974",
    appId: "1:541109517974:web:e8dca0490fb5fee56b0cb7"
});

const db = firebaseApp.firestore();

export default db;