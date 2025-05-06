import { useState } from 'react'

function ItemCount() {
  const [contador, setContador] = useState(0)

  function sumar() {
    setContador(contador + 1)
  }

  function restar() {
    setContador(contador - 1)
  }

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <button onClick={restar}>-</button>
      <h1>{contador}</h1>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount