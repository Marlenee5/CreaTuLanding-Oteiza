import "./ItemDetail.css";


const ItemDetail = ({ item }) =>{
    return (
        <div className="item-detail">
           <img src={item.pictureUrl} alt={item.title} className="item-detail-img" />
            <div className="item-detail-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p><strong>Precio:</strong> ${item.price} </p>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;