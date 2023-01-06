import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = (status) => {
    const Auth = {token:status && status ? status : false}
  return Auth.token ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute

