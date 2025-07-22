import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const fetchJogos = async () => {
      const snapshot = await getDocs(collection(db, "jogosFuturos"));
      const jogosFuturos = snapshot.docs.map(doc => doc.data());
      console.log(`🟢 Jogos encontrados: ${snapshot.size}`);
      setJogos(jogosFuturos);
    };

    fetchJogos();
  }, []);

  return (
    <div className="app">
      <h1>Jogos Futuros</h1>
      <ul>
        {jogos.map((jogo, idx) => (
          <li key={idx}>{jogo.jogador1} vs {jogo.jogador2}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;