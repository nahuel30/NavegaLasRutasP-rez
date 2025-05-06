import ItemCount from "./ItemCount"

const ItemDetail = (props) =>{

    return(
        <div>
            <p>{props.product?.title}</p>
            <p>Precio: $ {props.product?.price}</p>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemDetail