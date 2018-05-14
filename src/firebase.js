import * as firebase from 'firebase'

const config = {
  apiKey: "",
    authDomain: "g",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

export const firebaseApp = firebase.initializeApp(config)

