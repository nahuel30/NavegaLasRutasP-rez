import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext'
import Cart from './components/Cart'
import { createFirebaseApp } from './utils/configFirebase'
import Checkout from './components/CheckOut'

function App() {

createFirebaseApp()

return (
    <BrowserRouter>
    <CartProvider>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:categoryId" element={<ItemListContainer />}/>
      <Route path="/item/:productId" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart></Cart>}/>
      <Route path="/checkout" element={<Checkout></Checkout>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
