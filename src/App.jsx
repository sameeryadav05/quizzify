import React, { useEffect } from 'react'
import './Main.scss';
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import useAuthStore from './store/AuthStore'

const PrivateLayout = ()=>{
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return(
    <div className='container'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const AuthRoute= ()=>{
  return(
    <Outlet />
  )
}

function App() {
  const isAuthenticated = useAuthStore((state)=>state.isAuthenticated);
  const router = createBrowserRouter([
    {
      path:'/',
      element:<PrivateLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        }
      ]
    },
    {
      element:<AuthRoute />,
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
    <RouterProvider router={router}/>
  )
}



export default App
