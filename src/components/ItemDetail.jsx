import ItemCount from "./ItemCount"

const ItemDetail = (props) =>{

    return(
        <div style={{backgroundColor: 'skyblue'}}>
            <p>{props.product?.title}</p>
            <img width={250} src={props.product.img}></img>
            <p>Precio: $ {props.product?.price}</p>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemDetail