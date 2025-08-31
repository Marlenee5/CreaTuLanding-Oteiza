import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { ItemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
            const producto = data.find((p) => p.id === parseInt(ItemId));
            setItem(producto);
        });
    }, [ItemId]);

    if (!item) return <h2>Cargando producto...</h2>;

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;