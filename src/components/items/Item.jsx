import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ item }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "inherit" }} >
        <img src={item.pictureUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
      </Link>
    </div>
  );
};

export default Item;
