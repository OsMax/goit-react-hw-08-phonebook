import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhones } from 'redux/phone/operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);
  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
