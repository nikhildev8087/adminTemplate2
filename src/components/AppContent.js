import React from 'react'
import { Route, Routes } from 'react-router-dom';
import routes from '../routes'
import ProtectedRoute from './ProtectedRoute'

const AppContent = () => {
    const userLogin = false;
  return (
    <div className='container container-lg'>
      <Routes>
        <Route element={<ProtectedRoute/>}>
            {routes.map((route, idx) => {
                return (
                    route.element && (
                        <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.element/>}
                        />
                    )
                )
            })}
        </Route>
      </Routes>
    </div>
  )
}

export default React.memo(AppContent)
