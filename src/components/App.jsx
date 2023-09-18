// import { useState, useEffect } from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navigation } from './Navigation/Navigation';
import { current } from 'redux/auth/authOperation';
// import Loader from './Loader/Loader';

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch;

  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<Home />}></Route> */}
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
