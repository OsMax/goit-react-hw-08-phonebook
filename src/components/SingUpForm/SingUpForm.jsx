import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperation';
import css from './SingUpForm.module.css';

export const SingUpForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name': {
        return setName(value);
      }
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};
