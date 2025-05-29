import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import "../index.css"

function ItemListContainer(props){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const collectionRef = collection(db, 'products')
        const queryCollection = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef

        getDocs(queryCollection).then((response)=>{
            const responseMapped = response.docs.map((doc)=>({...doc.data() , id: doc.id}))
            setProducts(responseMapped)
        }).catch(()=>{
        console.log('error de carga de producto')
       })
        .finally(()=>{
            setLoading(false)
        })

    }, [categoryId])

    if(loading) return <div><h4>Cargando...</h4></div>
    
return (
  <div className="container">
    {loading 
      ? <h4>Cargando...</h4> 
      : <ItemList products={products} />
    }
  </div>
)

}

export default ItemListContainer