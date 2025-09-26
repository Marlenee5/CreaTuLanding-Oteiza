import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebase';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const { ItemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", ItemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el producto con ese ID");
        }
      } catch (error) {
        console.error("Error cargando producto:", error);
      }
    };

    fetchProduct();
  }, [ItemId]);

  if (!item) return <h2>Cargando producto...</h2>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
