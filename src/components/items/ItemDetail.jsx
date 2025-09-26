import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/cartContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";



const ItemDetail = ({ item }) => {
    const { addItem } = useCart(); // Traemos la función del contexto 

    const handleAdd = (quantity) => {
        addItem(item, quantity); // guardamos el producto en el carrito

            Toastify({
      text: `✅ Agregaste ${quantity} ${item.title} al carrito`,
      duration: 1500,           // 3 segundos
      close: true,              // botón para cerrar
      gravity: "top",           // arriba o abajo
      position: "right",        // izquierda o derecha
      backgroundColor: "#27ae60",
      stopOnFocus: true,        // pausa si pasás el mouse encima
    }).showToast();
    }

    return (
        <div className="item-detail">
            <img
                src={item.pictureUrl}
                alt={item.title}
                className="item-detail-img"
            />
            <div className="item-detail-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>
                    <strong>Precio:</strong> ${item.price}
                </p>
                <ItemCount stock={item.stock || 10} initial={1} onAdd={handleAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;