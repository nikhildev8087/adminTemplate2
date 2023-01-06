import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import './css/style.css'
import Register from './views/pages/register/Register';
import { Provider, useSelector } from 'react-redux';
import store from '../src/store'
import Router from './Pages/router';


//pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const register = React.lazy(() => import('./views/pages/register/Register'))

function App() {

 const loginFlag = useSelector((state) => state?.auth?.loginFlag);

  return (
   
    <BrowserRouter>
    <Suspense 
    fallback={<div className='d-flex justify-content-center align-items-center flex-column' style={{height: "100vh"}}>
      <img src="" alt="logo" height="100" />
      <span className='pt-4 text-dark' style={{fontSize:"14px"}}> loading...</span>
    </div> }
    >

      <Routes>
        {!loginFlag && <>
         <Route exact path='/' name="Login Page" element={<Login/>}/>
         <Route exact path='/register' name="Register Page" element={<Register/>}/>
        </> }
        
        <Route path='*' element={<DefaultLayout/>}/>
      </Routes>
      </Suspense>
      {/* <Router/> */}
    </BrowserRouter>
  );
  
}

export default App;
