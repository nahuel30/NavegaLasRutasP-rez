import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:categoryId" element={<ItemListContainer />}/>
      <Route path="/item/:productId" element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
