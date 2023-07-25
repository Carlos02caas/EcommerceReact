import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'

import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context'

import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../components/Navbar'
import { Store } from '../Store'
import { ProductDetail } from '../../components/ProductDetail';
import { CheckOutSideMenu } from '../../components/CheckOutSideMenu';

import './App.css'
import { useContext } from 'react'

const AppRoutes = () => {

  const context = useContext(ShoppingCartContext);
  //Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  //sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  //Has an Account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  const routes = useRoutes([
    { path: '/', element:hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'/sign-in'} />},
    { path: '/store', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/shoes', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Store/>: <Navigate replace to={'/sign-in'} />},
    { path: '/my-account', element: <MyAccount/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder/>},
    { path: '/my-orders/:id', element: <MyOrder/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
    { path: '/sign-in', element: <SignIn/>},
  ])

  return routes;
}

function App() {

  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <ProductDetail/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App
