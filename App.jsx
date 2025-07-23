import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [jogos, setJogos] = useState([])

  useEffect(() => {
    const fetchJogos = async () => {
      const col = collection(db, 'jogosFuturos')
      const snap = await getDocs(col)
      const data = snap.docs.map(doc => doc.data())
      console.log("Quantidade de jogos futuros:", data.length)
      setJogos(data)
    }

    fetchJogos()
  }, [])

  return (
    <div style={{ padding: 20, background: '#121212', color: '#fff' }}>
      <h1>Tênis Predict - Modo Escuro</h1>
      <p>Total de jogos: {jogos.length}</p>
    </div>
  )
}

export default App
