import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import "./CartWidget.css";

const CartWidget = () => {
    const { cart } = useCart();

    // Calcular total de unidades
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-widget">
            🛒
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
    );
};

export default CartWidget;
