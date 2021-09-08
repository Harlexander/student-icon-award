import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
        apiKey: "AIzaSyBHHlHErHFRq-Sv82V2ZQryY9M9KPSCWk0",
        authDomain: "nenyehairs.firebaseapp.com",
        databaseURL: "https://nenyehairs.firebaseio.com",
        projectId: "nenyehairs",
        storageBucket: "nenyehairs.appspot.com",
        messagingSenderId: "89472471231",
        appId: "1:89472471231:web:b4ee233efb55d66486360a",
        measurementId: "G-QJSYPEKETF"
})

export const firestore = app.firestore()
export const fb = firebase
export default app