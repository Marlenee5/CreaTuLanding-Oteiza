import { useState } from "react";
import { useCart } from "../../../context/cartContext";
import "./Cart.css";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, total } = useCart();
  const [checkout, setCheckout] = useState(false); // Estado para mostrar/ocultar el formulario

  // Mostrar carrito vacío solo si no estamos en checkout
  if (cart.length === 0 && !checkout) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <p>Agregá productos para comenzar tu compra 🛒</p>
        <Link to="/">
          <button className="btn-back">Ir al catálogo</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>

      {!checkout ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.pictureUrl}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}

          <h3 className="cart-total">Total: ${total}</h3>

          <div className="cart-buttons">
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={() => setCheckout(true)}>Finalizar compra</button>
          </div>
        </>
      ) : (
        <CheckoutForm
          cart={cart}
          total={total}
          clearCart={clearCart}
          onConfirm={(order) => console.log("Datos del comprador:", order)}
        />
      )}
    </div>
  );
};

export default Cart;
