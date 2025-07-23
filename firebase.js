import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "tenis-predict.firebaseapp.com",
  projectId: "tenis-predict",
  storageBucket: "tenis-predict.appspot.com",
  messagingSenderId: "295797395299",
  appId: "1:295797395299:web:30a58ff5be77a58be774a7",
  measurementId: "G-RGR8KX8L0J"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
