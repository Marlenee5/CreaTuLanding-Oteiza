import { useState } from "react"
import "./ItemCount.css";

const ItemCount= ({ stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial);

    const incrementar= () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    
    const decrementar = () => {
        if (count > 1) {
            setCount(count -1);
        }
    };

    return (
        <div className="item-count">
            <div className="item-count-controls">
                <button onClick={decrementar} disabled={count <=1}>-</button>
                <span>{count}</span>
                <button onClick={incrementar} disabled={count >= stock}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;