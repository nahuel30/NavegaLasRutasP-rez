import { useContext } from "react"
import { cartContext } from "./CartContext"
import { Link } from "react-router-dom"
import "../index.css"

const Cart = () => {
  const { cart, cleanCart, removeItem, getTotalPrice } = useContext(cartContext);

  const totalPrice = getTotalPrice();

  if (cart.length === 0) return <h2>Todavía no agregaste productos :c</h2>;

  return (
    <div className="cart-container">
      <h2>Tu total es de: ${totalPrice}</h2>
      <button className="clean-cart-btn" onClick={cleanCart}>Vaciar Carrito</button>
      <h2>Tus Productos</h2>
      {cart.map((cartProduct) => (
        <div className="cart-item" key={cartProduct.product.id}>
          <div className="cart-item-info">
            <h3>{cartProduct.product.title}</h3>
            <h3>Precio c/u: ${cartProduct.product.price}</h3>
            <h3>Cantidad: {cartProduct.quantity}</h3>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => removeItem(cartProduct.product.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      <Link className="checkout-link" to="/checkout">Finalizar compra</Link>
    </div>
  );
};


export default Cart