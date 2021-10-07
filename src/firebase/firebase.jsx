import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/storage"

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
export const storage = app.storage()
export const database = app.database()
export const fb = firebase
export default app