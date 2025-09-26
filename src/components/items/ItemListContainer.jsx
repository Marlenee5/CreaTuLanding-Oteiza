import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");

        let q;
        if (categoriaId) {
          q = query(productsCollection, where("category", "==", categoriaId));
        } else {
          q = productsCollection;
        }

        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(products);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchProducts();
  }, [categoriaId]);

  const grouped = !categoriaId
    ? items.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    }, {})
    : null;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      <h2>{greeting}</h2>
      {items.length === 0 ? (
        <p>Cargando productos...</p>
      ) : categoriaId ? (
        <ItemList items={items} />
      ) : (
        Object.keys(grouped).map((category) => (
          <div key={category}>
            <h3 className="category-title">{capitalize(category)}</h3>
            <div className="product-grid">
              {grouped[category].slice(0, 3).map((product) => (
                <ItemList key={product.id} items={[product]} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
