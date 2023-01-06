import React from 'react'
import navigation from '../nav';
import { AppSidebarNav } from './AppSidebarNav';

const AppSidebar = () => {
  return (
    <div className='sidebar position-fixed'>
      <div className='d-none d-md-flex dashboard-logo' to='/'>
        <img src=''/>
        Admin Logo
      </div>
      <div className='sidebar-nav'>
        <div className='simple-bar d-flex flex-column mb-4'>
        <AppSidebarNav items={navigation} className="p-3 nav-link"/>
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
