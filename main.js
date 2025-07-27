import './style.css'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore'
import { format } from 'date-fns'

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SUA_AUTH_DOMAIN",
  projectId: "tenis-predict",
  storageBucket: "SUA_STORAGE_BUCKET",
  messagingSenderId: "SUA_SENDER_ID",
  appId: "SUA_APP_ID"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const appDiv = document.getElementById('app')
appDiv.innerHTML = '<h1>Jogos Futuros</h1><ul id="jogos"></ul>'

async function carregarJogos() {
  const jogosRef = collection(db, 'jogosFuturos')
  const q = query(jogosRef, orderBy('timestamp'))
  const snapshot = await getDocs(q)
  const lista = document.getElementById('jogos')
  snapshot.forEach(doc => {
    const data = doc.data()
    const dt = new Date(data.timestamp * 1000)
    const linha = document.createElement('li')
    linha.textContent = `${data.player1} vs ${data.player2} – ${format(dt, "dd/MM/yyyy 'às' HH:mm")}`
    lista.appendChild(linha)
  })
}

carregarJogos()
