import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import AppContent from '../components/AppContent';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';
import CompanyDetails from '../views/companyDetails/CompanyDetails';
import Dashboard from '../views/dashboard/Dashboard';
// import Dashboard from '../Pages/Components/index.js'
import orderDetail from '../views/orders/orderDetails/orderDetail';
import Projects from '../views/projects/Projects';
import RolesAndPermission from '../views/rolesAndPermission/RolesAndPermission';
import Users from '../views/users/Users';

const DefaultLayout = () => {
  const loginFlag = false;
  
  return (
    <div className='wrapper'>
      <div className='panel-container'>
        <AppHeader/>
      <AppSidebar className="sidebar"/>
        <div className='main-container'>
          <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/users' element={<Users/>} />
              <Route path='/orders' element={<orderDetail/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/comapany-details' element={<CompanyDetails/>} />
              <Route path='/rolesandpermission' element={<RolesAndPermission/>} />
              {/* <Route path='/reports' element={</>} /> */}
              <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
    </div> 
    </div>
  )
}

export default DefaultLayout
