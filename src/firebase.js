import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmmO9slmXQlT-yXKHn7I0vRHB-Kl-Gov4",
  authDomain: "torogosvpage.firebaseapp.com",
  databaseURL: "https://torogosvpage-default-rtdb.firebaseio.com",
  projectId: "torogosvpage",
  storageBucket: "torogosvpage.appspot.com",
  messagingSenderId: "776638047266",
  appId: "1:776638047266:web:c98029059a43f171c5567b",
  measurementId: "G-M92SQCD3N5",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function saveUserData(user) {
  try {
    const usersRef = ref(db, "users");
    const newUserRef = push(usersRef, user);
    return { success: true, id: newUserRef.key };
  } catch (error) {
    console.error("Error saving user data:", error);
    return { success: false, error };
  }
}
