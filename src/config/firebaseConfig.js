import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcckobdwS9zM4aE2Tc857cLXig4nLnWgE",
  authDomain: "info6132w25lab03-1189191.firebaseapp.com",
  projectId: "info6132w25lab03-1189191",
  storageBucket: "info6132w25lab03-1189191.firebasestorage.app",
  messagingSenderId: "64503848133",
  appId: "1:64503848133:web:5df61675cf66f57be264ac",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set, update };
