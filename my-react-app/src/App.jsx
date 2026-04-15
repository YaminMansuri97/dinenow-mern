import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import ManageProducts from './admin/ManageProduct'
import NoPage from './Components/NoPage'
import Navbar from './Layout/Navbar'
import Login from './Layout/Login'
import Register from './Layout/Register'
import About from './Components/About'
import Contact from './Components/Contact'
import BookTable from './Components/BookTable'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/product' element= {<Product />} />
        <Route path= '/manageproducts' element= {<ManageProducts />} />
        <Route path='/about' element= {<About />} />
        <Route path='/book-table' element= {<BookTable />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/register' element= {<Register />} />
        <Route path='*' element= {<NoPage />} />
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
