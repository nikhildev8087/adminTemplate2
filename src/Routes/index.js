import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../views/dashboard/Dashboard'
import orderDetail from '../views/orders/orderDetails/orderDetail'
import Login from '../views/pages/login/Login'
import Users from '../views/users/Users'

const Router = () => {
    const AuthToken = true;
    
  return (
    <>
    <Routes>
        {!AuthToken ? (
            <Route exact path='/' element={<Login/>}/>
        ) : (
            <Route exact path='/' element={<Dashboard/>}/>
        )

        }

        <Route exact path="/user" element={<Users/>}/>
        <Route exact path="/orderdetails" element={<orderDetail/>}/>
    </Routes>
    </>
  )
}

export default Router
