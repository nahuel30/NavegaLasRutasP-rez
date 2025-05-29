import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../utils/getProducts"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import "../index.css"

const ItemDetailContainer = ()=>{

    const { productId } =useParams() 
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
       const db = getFirestore()
       const documentRef = doc(db, 'products', productId)

       getDoc(documentRef).then((response)=>{
        setProduct({...response.data(), id: response.id})
        setLoading(false)
       })
       .catch(()=>{
        console.log('error de carga de producto')
       })

    }, [productId])

    if(loading) return <div><h4>Cargando...</h4></div>


    return (
    <div className="container item-detail-container">
        <ItemDetail product={product} />
    </div>
    )

}

export default ItemDetailContainer