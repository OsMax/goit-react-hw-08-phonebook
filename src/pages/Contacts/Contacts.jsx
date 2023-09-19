import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhones } from 'redux/phone/operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);
  return (
    <div className={css.appContainer}>
      <h2>Add contacts</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
