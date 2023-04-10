import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice.js';
import css from './List.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button type="button" onClick={e => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};