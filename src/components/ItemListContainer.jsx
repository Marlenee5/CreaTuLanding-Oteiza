import { useState, useEffect } from "react";
import { getProducts } from "../data/asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const  [items, setItems] = useState([]);
    const { categoriaId }= useParams();

    useEffect(() => {
        getProducts().then((res) => {
            // Si después agrego categorías en el mock, acá lo filtro
            if (categoriaId) {
                setItems(res.filter((item) => item.category === categoriaId));
            } else {
                setItems(res);
            }
        });
    }, [categoriaId]);

    return (
        <div>
            <h2>{greeting}</h2>
            {items.length === 0 ? <p>Cargando productos...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;

// const ItemListContainer = ({ mensaje }) => {
//     return (
//         <div style={styles.container}>
//             <h2 style={styles.texto}>{mensaje}</h2>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         padding: '2rem',
//         textAlign: 'center',
//         backgroundColor: '#f9f9f9',
//         borderRaiud: '10px',
//         marginTop: '2rem',
//     },
//     texto: {
//         color: '#333',
//         fontSize: '1.5rem',
//     }
// };

