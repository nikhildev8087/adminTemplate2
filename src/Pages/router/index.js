import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Orders from "../Orders/index"

//IMPORT PAGES
import Dashboard from "../Dashboard/index";
import Users from "../Users/index";
import Login from "../Login/index";

const Router = () => {
  const AuthToken = true;
  return (
    <>
      <Routes>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {!AuthToken ? (
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            element={<Login />}
          />
        ) : (
          <Route exact path="/" element={<Dashboard />} />
        )}
        {/* <Route exact path='/' element={<Login />}/> */}
        <Route
          exact
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route exact path="/login" element={<Login />} />
       
        {/* </Suspense> */}
      </Routes>
    </>
  );
};

export default Router;
