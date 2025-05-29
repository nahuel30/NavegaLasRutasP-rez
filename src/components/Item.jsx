import { Link } from "react-router-dom"
import "../index.css"

const Item = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.img} alt={product.title} className="item-image" />
            <h2 className="item-title">{product.title}</h2>
            <h3 className="item-price">${product.price}</h3>
            <Link to={`/item/${product.id}`} className="item-link">Ver detalle</Link>
        </div>
    );
};

export default Item;
