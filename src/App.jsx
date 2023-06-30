import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import { ProductsData } from './api/Api'
import Product from './components/Product/Product'
import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'

function App() {

  // Layout Devlop
  const Layout = () => {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    )
  }

  // Create Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ProductsData,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },

      ]
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
