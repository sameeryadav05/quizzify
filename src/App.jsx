import React, { lazy, Suspense } from 'react';
import './Main.scss';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import useAuthStore from './store/AuthStore';
import Login from './pages/Login';
import Loader from './components/Loader';

// Lazy imports with artificial delay for testing loader visibility (optional)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Navbar = lazy(() => delay(1000).then(() => import('./components/Navbar')));
const Home = lazy(() => delay(1000).then(() => import('./pages/Home')));
const Register = lazy(() => delay(1000).then(() => import('./pages/Register')));

// PrivateRoute layout with auth check
const PrivateLayout = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

// Auth route wrapper
const AuthRoute = () => {
  return <Outlet />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <PrivateLayout />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: <Home />, // No extra Suspense here
        },
      ],
    },
    {
      element: <AuthRoute />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/sign-up',
          element: (
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
