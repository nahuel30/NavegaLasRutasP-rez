import { useContext, useState } from 'react'
import { cartContext } from './CartContext'
import "../index.css"

function ItemCount({product}) {

  const {onAdd} = useContext(cartContext)

  const [contador, setContador] = useState(0)

  function sumar() {
    setContador(contador + 1)
  }

  function restar() {
    setContador(contador - 1)
  }

  return (
    <div>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <button onClick={restar}>-</button>
      <h1>{contador}</h1>
      <button onClick={sumar}>+</button>
    </div>
    <button onClick={()=>{
      onAdd(product,contador)
    }}> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount