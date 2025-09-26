// Importa lo necesario
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración (la que ya tenías)
const firebaseConfig = {
  apiKey: "AIzaSyA5T8ua8ux9PdcR42xJGpYJRAubiwf8_2k",
  authDomain: "creatulanding-oteiza.firebaseapp.com",
  projectId: "creatulanding-oteiza",
  storageBucket: "creatulanding-oteiza.firebasestorage.app",
  messagingSenderId: "255300981799",
  appId: "1:255300981799:web:43da2a6a08035cc9682a02",
  measurementId: "G-E2BNCR38KM"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar db para usarlo en otros archivos
export const db = getFirestore(app);