// import { useState, useEffect } from 'react';
import { SingInForm } from 'components/SingInForm/SingInForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.logCont}>
      <h2 className={css.logTitle}>LogIn</h2>
      <SingInForm />
    </div>
  );
};

export default Login;
