import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';

import css from './SingInForm.module.css';

export const SingInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email': {
        return setEmail(value);
      }
      case 'password': {
        return setPassword(value);
      }
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};
