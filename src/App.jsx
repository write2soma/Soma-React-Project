import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import Services from './components/Services'
import Barcodes from './components/Barcodes'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Notfound from './components/Notfound'


function App() {
  const [count, setCount] = useState(0)
  const Menu = createBrowserRouter([
    {
      path:'/',
      element:<><Header/><Home/><Footer/></>
    },
    {
      path:'/products',
      element:<><Header/><Products/><Footer/></>
    },
    {
      path:'/services',
      element:<><Header/><Services/><Footer/></>
    },
    {
      path:'/barcodes',
      element:<><Header/><Barcodes/><Footer/></>
    },
    {
      path:'/testimonials',
      element:<><Header/><Testimonials/><Footer/></>
    },
    {
      path:'/newsletter',
      element:<><Header/><Newsletter/><Footer/></>
    },
    {
      path:':abc',
      element:<><Header/><Notfound/><Footer/></>
    },
  ])

  return (
    <>
      <RouterProvider router={Menu}/>
    </>
  )
}

export default App
