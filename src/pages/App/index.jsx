import { useRoutes, BrowserRouter } from 'react-router-dom'

import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../components/Navbar'
import { Store } from '../Store'

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/store', element: <Store/>},
    { path: '/my-account', element: <MyAccount/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
    { path: '/sign-in', element: <SignIn/>},
  ])

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
