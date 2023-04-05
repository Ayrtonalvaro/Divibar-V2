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
import AdminRoute from './routes/AdminRoute'
import AdminDashboard from './pages/admin/AdminDashboard'
import CreateCategory from './pages/admin/CreateCategory'
import CreateMenu from './pages/admin/CreateMenu'
import Users from './pages/admin/Users'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/orders' element={<Orders/>} />
          <Route path='user/profile' element={<Profile/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />s
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-menu' element={<CreateMenu />} />
          <Route path='admin/users' element={<Users />} />
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
