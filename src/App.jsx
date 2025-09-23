import React from 'react'

import { createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const privateLayout = ()=>{
  return(
    <div className='container'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const authRoute= ()=>{
  return(
    <Outlet />
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<privateLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        }
      ]
    },
    {
      element:<authRoute />,
      children:[
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/sign-up',
          element:<Register/>
        }
      ]
    }
  ])

  return (
    <>

    </>
  )
}

export default App
