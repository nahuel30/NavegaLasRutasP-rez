import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../utils/getProducts"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=>{

    const { productId } =useParams() 
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
       getSingleProduct(productId).then((productFromPromise)=>{
        setProduct(productFromPromise)
        setLoading(false)
       })  
    }, [productId])

    if(loading) return <div><h4>Cargando...</h4></div>


    return (
    <div>
        <ItemDetail product={product}></ItemDetail>
    </div>
    )
}

export default ItemDetailContainer