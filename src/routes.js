import React,{ lazy } from 'react';


const appContent = lazy(()=> import('../src/components/AppContent'))
const header = lazy(()=> import('../src/components/AppHeader'))
const sidebar = lazy(()=> import('../src/components/AppSidebar'))

const order = lazy(() => import('./views/orders/order'))
const orderDetails = lazy(() => import('./views/orders/orderDetails/orderDetail'))
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Users = lazy(() => import('./views/users/Users'))
const ComapanyDetails = lazy(() => import('./views/companyDetails/CompanyDetails'))
const RolesAndPermission = lazy(() => import('./views/rolesAndPermission/RolesAndPermission'))
const Projects = lazy(() => import('./views/projects/Projects'))



const routes = [
  {path:"/", exact:true, name:'Home', element:Dashboard},
  {path:"/dashboard",  name:'Dashboard', element:Dashboard},
  
  {path:"/users",  name:'Users', element:Users},
  {path:"/order", name:'Orders', element:order},
  {path:"/orderdetails", name:'orderDetails', element:orderDetails},
  {path:"/company-details", name:'CompanyDetails', element:ComapanyDetails},
  {path:"/rolesandpermission", name:'RolesAndPermission', element:RolesAndPermission},
  {path:"/projects", name:'Projects', element:Projects},
]

export default routes
