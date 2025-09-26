import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../utils/firebase';
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm, cart, total, clearCart }) => {
    const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);


    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer,
            items: cart,
            total,
            date: serverTimestamp(),
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);

            setOrderId(docRef.id);  // guardamos el ID de la orden
            clearCart();
            setBuyer({ name: "", email: "", phone: "" });
            onConfirm(order);
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-form">
            {orderId ? (
                <div className="order-confirmation">
                    <h2>✅ Compra realizada!</h2>
                    <p>Tu ID de orden es: <strong>{orderId}</strong></p>
                    <p>Gracias por tu compra 😊</p>
                </div>
            ) : (
                <>
                    <h2>Formulario de compra</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input type="text" name="name" value={buyer.name} onChange={handleChange} required />

                        <label>Email:</label>
                        <input type="email" name="email" value={buyer.email} onChange={handleChange} required />

                        <label>Teléfono:</label>
                        <input type="tel" name="phone" value={buyer.phone} onChange={handleChange} required />

                        <button type="submit" disabled={loading}>
                            {loading ? "Procesando..." : "Confirmar compra"}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default CheckoutForm;

