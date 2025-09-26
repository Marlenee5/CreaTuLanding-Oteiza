import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto al carrito
    const addItem = (item, quantity) => {
        const existingItem = cart.find(prod => prod.id === item.id);

        if (existingItem) {
            // si ya existe, solo sumamos la cantidad
            setCart(cart.map(prod =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Eliminar un producto
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Calcular total
    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook
export const useCart = () => {
    return useContext(CartContext);
}
