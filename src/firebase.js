import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBjVeHMSgNrNgVBQ0v4P89Y8JZrCWA70bQ",
    authDomain: "gamestore-c258a.firebaseapp.com",
    databaseURL: "https://gamestore-c258a.firebaseio.com",
    projectId: "gamestore-c258a",
    storageBucket: "",
    messagingSenderId: "718426473014"
}

export const firebaseApp = firebase.initializeApp(config)

