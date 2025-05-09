import {Link} from "react-router-dom"

const Item = (props)=>{
    return (
    <div style={{ border: '2px solid black', borderRadius: '8px', padding: '20px', minWidth: 200}}>
        <h2>{props.product.title}</h2>
        <img width={150} src={props.product.img}></img>
        <h3>${props.product.price}</h3>
        <Link to={`/item/${props.product.id}`}>Ver detalle!</Link>
    </div>
    )
}

export default Item