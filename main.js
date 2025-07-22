import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "tenis-predict.firebaseapp.com",
  projectId: "tenis-predict",
  storageBucket: "tenis-predict.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const lista = document.getElementById("jogos-lista");
const darkToggle = document.getElementById("toggle-dark");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

async function carregarJogos() {
  const colRef = collection(db, "jogosFuturos");
  const snapshot = await getDocs(colRef);
  lista.innerHTML = "";
  if (snapshot.empty) {
    lista.innerHTML = "<li>Nenhum jogo encontrado.</li>";
    return;
  }
  snapshot.forEach(doc => {
    const jogo = doc.data();
    const li = document.createElement("li");
    li.textContent = `${jogo.jogador1} vs ${jogo.jogador2} - ${jogo.data}`;
    lista.appendChild(li);
  });
}

carregarJogos();