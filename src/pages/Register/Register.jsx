// import { useState, useEffect } from 'react';
import { SingUpForm } from 'components/SingUpForm/SingUpForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.regCont}>
      <h2 className={css.regTitle}>LogUp</h2>
      <SingUpForm />
    </div>
  );
};

export default Register;
