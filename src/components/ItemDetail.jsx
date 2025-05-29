import ItemCount from "./ItemCount"
import "../index.css"

const ItemDetail = ({product}) =>{

    return(
        <div style={{backgroundColor: 'skyblue'}}>
            <p>{product?.title}</p>
            <img width={250} src={product?.img}></img>
            <p>Precio: $ {product?.price}</p>
            <ItemCount product={product}></ItemCount>
        </div>
    )
}

export default ItemDetail