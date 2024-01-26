import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const prodConfig = {
  apiKey: "AIzaSyCQASAr8wI9HdM5JEuhbHCM4Bc-nKeMkJw",
  authDomain: "test-1d7b6.firebaseapp.com",
  databaseURL: "https://test-1d7b6.firebaseio.com",
  projectId: "test-1d7b6",
  storageBucket: "test-1d7b6.appspot.com",
  messagingSenderId: "885916618591"
};

const devConfig = {
  apiKey: "AIzaSyCQASAr8wI9HdM5JEuhbHCM4Bc-nKeMkJw",
  authDomain: "test-1d7b6.firebaseapp.com",
  databaseURL: "https://test-1d7b6.firebaseio.com",
  projectId: "test-1d7b6",
  storageBucket: "test-1d7b6.appspot.com",
  messagingSenderId: "885916618591"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export {
  db,
  auth,
};
