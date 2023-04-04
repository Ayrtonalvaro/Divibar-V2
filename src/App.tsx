import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import CartPage from './pages/Cart/CartPage'
import Contact from './pages/contacto/Contact'
import Eventos from './pages/eventos/Eventos'
import Home from './pages/home/Home'
import Menu from './pages/menus/Menu'
import ProductDetails from './pages/producto/ProductDetails'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
        </Route>
        <Route path='/Menus' element={<Menu />} />
        <Route path='/productos/:id' element={<ProductDetails />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/compra' element={<CartPage />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
