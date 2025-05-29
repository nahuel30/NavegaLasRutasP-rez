import { createContext, useState } from "react";
import "../index.css"

export const cartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])  

    const onAdd = (product, quantity) => {
        const productInCartIndex = cart.findIndex((item) => item.product.id === product.id);

        if (productInCartIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[productInCartIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity }]);
        }
    }


    const cleanCart =()=>{
        setCart([])
    }

    const removeItem = (productId) => {
        setCart(cart.filter((cartProduct) => cartProduct.product.id !== productId))
    }

    const getTotalPrice = () => {
        let totalPrice = 0

        cart.forEach((cartProduct) => {
            totalPrice += cartProduct.product.price * cartProduct.quantity 
        })

        return totalPrice
    }

    const getTotalItemsInCart =()=>{
        let totalItems = 0

        cart.forEach((cartProduct)=>{
            totalItems += cartProduct.quantity
        })

        return totalItems
    }

    return (
        <cartContext.Provider 
            value={{
                cart,
                onAdd,
                cleanCart,
                removeItem,
                getTotalPrice,
                getTotalItemsInCart
            }}
        >
        {children}
        </cartContext.Provider>
    )
}

export default CartProvider