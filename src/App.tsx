import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import CartPage from './pages/Cart/CartPage'
import Contact from './pages/contacto/Contact'
import Home from './pages/home/Home'
import Menu from './pages/menus/Menu'
import ProductDetails from './pages/producto/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/productos/:id' element={<ProductDetails />} />
          <Route path='/carrito' element={<CartPage />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
