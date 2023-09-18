import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/phone/selectors';
import css from './ContactForm.module.css';
import { addPhone } from 'redux/phone/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitData = e => {
    e.preventDefault();

    const form = e.target;
    const nameAdd = e.target.elements.name.value;
    const numberAdd = e.target.elements.number.value;

    if (!nameAdd.trim() || !numberAdd.trim()) {
      alert('Please complete all fields');
      return;
    }
    if (contacts.some(({ name }) => name === nameAdd)) {
      return alert(`${nameAdd} is already in contacts`);
    }

    if (contacts.some(({ phone }) => phone === numberAdd)) {
      return alert(`${numberAdd} is already in contacts`);
    }
    dispatch(addPhone({ name: nameAdd, number: numberAdd }));

    console.log({ name: nameAdd, number: numberAdd });
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={submitData}>
      <label className={css.label}>
        <span className={css.labelText}>Name</span>
        <input
          className={css.input}
          name="name"
          type="text"
          value={contacts.name}
          pattern="[A-Za-zА-Яа-яЁё]{2,}[ ][A-Za-zА-Яа-яЁё]{2,}"
          placeholder="Name Surname (min 2 symbols for each)"
        />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Number</span>
        <input
          className={css.input}
          name="number"
          type="text"
          value={contacts.number}
          pattern="\d{3}[\-]\d{3}[\-]\d{4}"
          placeholder="111-111-1111"
        />
      </label>
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
