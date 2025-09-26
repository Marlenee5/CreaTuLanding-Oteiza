import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";   // 👈 importa db desde firebase.js
import products from "../data/asyncMock.js";

const uploadProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    for (const product of products) {
      await setDoc(doc(productsCollection, String(product.id)), product);
    }
    console.log("✅ Productos subidos con éxito a Firestore");
  } catch (error) {
    console.error("❌ Error subiendo productos:", error);
  }
};

uploadProducts();
