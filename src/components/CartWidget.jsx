import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from './CartContext'
import "../index.css"
function CartWidget(){

    const {getTotalItemsInCart} = useContext(cartContext)
    const totalItems = getTotalItemsInCart()


    return (
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
            <h3>{totalItems > 0 && totalItems}</h3>
            <Link to="/cart">
                <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt="carrito" width={50}/>
            </Link>
        </div>
    )
}

export default CartWidget